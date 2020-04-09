using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApplacationBLLInterfaces;
using ApplicationBinding;
using ApplicationBLL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace CSVReaderBack
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            string connection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<ApplicationDBContext>(options => 
                options.UseNpgsql(connection, b => b.MigrationsAssembly("ApplicationBinding")));
            services.AddTransient<IDataService, DataService>();
            services.AddTransient<IParseService, ParseService>();
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder =>
                {
                    //builder.WithOrigins("http://localhost:8080")
                    //                     .AllowAnyOrigin()
                    //                     .AllowAnyHeader()
                    //                     .AllowAnyMethod(); 
                    //builder.WithOrigins("http://localhost:8080")
                    // .AllowAnyHeader()
                    // .AllowAnyMethod(); 
                    builder.AllowAnyOrigin();
                    builder.AllowAnyHeader();
                    builder.AllowAnyMethod();
                    builder.AllowCredentials();
;
                });
            });
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            

            
            app.UseHttpsRedirection();
            app.UseCors(MyAllowSpecificOrigins);
            app.UseMvc();
        }
    }
}
