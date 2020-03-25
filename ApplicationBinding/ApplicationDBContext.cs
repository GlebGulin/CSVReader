using Microsoft.EntityFrameworkCore;
using Models;
using System;

namespace ApplicationBinding
{
    public class ApplicationDBContext : DbContext
    {
        public DbSet<DataModel> dataModels { get; set; }
        public DbSet<StatusModel> statusModels { get; set; }
        public DbSet<TypeModel> typeModels { get; set; }
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
           : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StatusModel>().HasData(
                new StatusModel
                {
                    Id = 1,
                    Status = "Pending"
                },
                new StatusModel
                {
                    Id = 2,
                    Status = "Completed"
                },
                new StatusModel
                {
                    Id = 3,
                    Status = "Cancelled"
                }

            );
            modelBuilder.Entity<TypeModel>().HasData(
               new TypeModel
               {
                   Id = 1,
                   Type = "Withdrawal",
               },
               new TypeModel
               {
                   Id = 2,
                   Type = "Refill",
               }

           );
            modelBuilder.Entity<DataModel>().HasData(
                new DataModel
                {
                    Id = 1,
                    TransactionId = 1,
                    StatusId = 1,
                    Status = "Pending",
                    TypeId = 1,
                    Type = "Withdrawal",
                    ClientName = "Dale Cotton",
                    Amount = 28.43
                },
                new DataModel
                {
                    Id = 2,
                    TransactionId = 2,
                    StatusId = 2,
                    Status = "Completed",
                    TypeId = 2,
                    Type = "Refill",
                    ClientName = "Paul Carter",
                    Amount = 45.16
                }

            );






        }
    }
}
