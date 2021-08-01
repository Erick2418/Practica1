using Microsoft.EntityFrameworkCore.Migrations;

namespace BackVerdadero1.Migrations
{
    public partial class PrimeraMigracion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Persona",
                columns: table => new
                {
                    Id_persona = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nom_persona = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fec_nacimiento = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Id_sector = table.Column<int>(type: "int", nullable: false),
                    Id_zona = table.Column<int>(type: "int", nullable: false),
                    Sueldo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Persona", x => x.Id_persona);
                });

            migrationBuilder.CreateTable(
                name: "Sector",
                columns: table => new
                {
                    Id_sector = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Desc_sector = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sector", x => x.Id_sector);
                });

            migrationBuilder.CreateTable(
                name: "Zona",
                columns: table => new
                {
                    Id_zona = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id_sector = table.Column<int>(type: "int", nullable: false),
                    Desc_zona = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Zona", x => x.Id_zona);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Persona");

            migrationBuilder.DropTable(
                name: "Sector");

            migrationBuilder.DropTable(
                name: "Zona");
        }
    }
}
