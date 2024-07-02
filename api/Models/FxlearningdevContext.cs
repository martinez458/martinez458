using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Models;

public partial class FxlearningdevContext : DbContext
{
    public FxlearningdevContext()
    {
    }

    public FxlearningdevContext(DbContextOptions<FxlearningdevContext> options)
        : base(options)
    {
    }

    public virtual DbSet<IndexInfo> IndexInfos { get; set; }

    public virtual DbSet<Kknock> Kknocks { get; set; }

    public virtual DbSet<Report> Reports { get; set; }

    public virtual DbSet<Term> Terms { get; set; }

//    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Data Source=DESKTOP-FHOTHN4\\SQLEXPRESS01;Initial Catalog=fxlearningdev;TrustServerCertificate=True;User ID=admin;Password=P@ssw0rd!;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<IndexInfo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__IndexInf__3214EC270F8C68DB");

            entity.ToTable("IndexInfo");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Description)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.IndexEn)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("IndexEN");
            entity.Property(e => e.IndexJp)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("IndexJP");
        });

        modelBuilder.Entity<Kknock>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__KKnock__3214EC27367A7A16");

            entity.ToTable("KKnock");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.CurrencyUnit)
                .HasMaxLength(10)
                .IsUnicode(false);
            entity.Property(e => e.IndexId).HasColumnName("IndexID");
            entity.Property(e => e.TimeFrameUnit)
                .HasMaxLength(2)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Report>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Report__3214EC2748923086");

            entity.ToTable("Report");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Category)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.UserName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Term>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Term__3214EC272263FBD0");

            entity.ToTable("Term");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Category)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Description)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.Gyou)
                .HasMaxLength(2)
                .IsUnicode(false);
            entity.Property(e => e.Term1)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("Term");
            entity.Property(e => e.TermYomi)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    public DbSet<api.Models.UserProfile>? UserProfile { get; set; }
}
