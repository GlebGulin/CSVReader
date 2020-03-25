using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ApplicationBinding.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "statusModels",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Status = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_statusModels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "typeModels",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_typeModels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "dataModels",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TransactionId = table.Column<int>(nullable: false),
                    StatusId = table.Column<int>(nullable: false),
                    Status = table.Column<string>(nullable: true),
                    TypeId = table.Column<int>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    ClientName = table.Column<string>(nullable: true),
                    Amount = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dataModels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_dataModels_statusModels_StatusId",
                        column: x => x.StatusId,
                        principalTable: "statusModels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_dataModels_typeModels_TypeId",
                        column: x => x.TypeId,
                        principalTable: "typeModels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "statusModels",
                columns: new[] { "Id", "Status" },
                values: new object[,]
                {
                    { 1, "Pending" },
                    { 2, "Completed" },
                    { 3, "Cancelled" }
                });

            migrationBuilder.InsertData(
                table: "typeModels",
                columns: new[] { "Id", "Type" },
                values: new object[,]
                {
                    { 1, "Withdrawal" },
                    { 2, "Refill" }
                });

            migrationBuilder.InsertData(
                table: "dataModels",
                columns: new[] { "Id", "Amount", "ClientName", "Status", "StatusId", "TransactionId", "Type", "TypeId" },
                values: new object[] { 1, 28.43, "Dale Cotton", "Pending", 1, 1, "Withdrawal", 1 });

            migrationBuilder.InsertData(
                table: "dataModels",
                columns: new[] { "Id", "Amount", "ClientName", "Status", "StatusId", "TransactionId", "Type", "TypeId" },
                values: new object[] { 2, 45.16, "Paul Carter", "Completed", 2, 2, "Refill", 2 });

            migrationBuilder.CreateIndex(
                name: "IX_dataModels_StatusId",
                table: "dataModels",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_dataModels_TypeId",
                table: "dataModels",
                column: "TypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "dataModels");

            migrationBuilder.DropTable(
                name: "statusModels");

            migrationBuilder.DropTable(
                name: "typeModels");
        }
    }
}
