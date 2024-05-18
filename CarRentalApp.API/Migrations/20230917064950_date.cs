using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarRentalApp.API.Migrations
{
    public partial class date : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RentStartDate",
                table: "RentalAgreements",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RentStartDate",
                table: "RentalAgreements");
        }
    }
}
