﻿// <auto-generated />
using ApplicationBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ApplicationBinding.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20200324014130_Init")]
    partial class Init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Models.DataModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Amount");

                    b.Property<string>("ClientName");

                    b.Property<string>("Status");

                    b.Property<int>("StatusId");

                    b.Property<int>("TransactionId");

                    b.Property<string>("Type");

                    b.Property<int>("TypeId");

                    b.HasKey("Id");

                    b.HasIndex("StatusId");

                    b.HasIndex("TypeId");

                    b.ToTable("dataModels");

                    b.HasData(
                        new { Id = 1, Amount = 28.43, ClientName = "Dale Cotton", Status = "Pending", StatusId = 1, TransactionId = 1, Type = "Withdrawal", TypeId = 1 },
                        new { Id = 2, Amount = 45.16, ClientName = "Paul Carter", Status = "Completed", StatusId = 2, TransactionId = 2, Type = "Refill", TypeId = 2 }
                    );
                });

            modelBuilder.Entity("Models.StatusModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Status");

                    b.HasKey("Id");

                    b.ToTable("statusModels");

                    b.HasData(
                        new { Id = 1, Status = "Pending" },
                        new { Id = 2, Status = "Completed" },
                        new { Id = 3, Status = "Cancelled" }
                    );
                });

            modelBuilder.Entity("Models.TypeModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Type");

                    b.HasKey("Id");

                    b.ToTable("typeModels");

                    b.HasData(
                        new { Id = 1, Type = "Withdrawal" },
                        new { Id = 2, Type = "Refill" }
                    );
                });

            modelBuilder.Entity("Models.DataModel", b =>
                {
                    b.HasOne("Models.StatusModel", "status")
                        .WithMany()
                        .HasForeignKey("StatusId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Models.TypeModel", "type")
                        .WithMany()
                        .HasForeignKey("TypeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
