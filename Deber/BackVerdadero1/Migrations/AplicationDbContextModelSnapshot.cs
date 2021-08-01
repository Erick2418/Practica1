﻿// <auto-generated />
using BackVerdadero1;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BackVerdadero1.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    partial class AplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.3")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BackVerdadero1.Models.Persona", b =>
                {
                    b.Property<int>("Id_persona")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Fec_nacimiento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Id_sector")
                        .HasColumnType("int");

                    b.Property<int>("Id_zona")
                        .HasColumnType("int");

                    b.Property<string>("Nom_persona")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sueldo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id_persona");

                    b.ToTable("Persona");
                });

            modelBuilder.Entity("BackVerdadero1.Models.Sector", b =>
                {
                    b.Property<int>("Id_sector")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Desc_sector")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id_sector");

                    b.ToTable("Sector");
                });

            modelBuilder.Entity("BackVerdadero1.Models.Zona", b =>
                {
                    b.Property<int>("Id_zona")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Desc_zona")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Id_sector")
                        .HasColumnType("int");

                    b.HasKey("Id_zona");

                    b.ToTable("Zona");
                });
#pragma warning restore 612, 618
        }
    }
}
