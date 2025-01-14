# Generated by Django 5.1.3 on 2025-01-06 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hungryhub', '0002_cliente'),
    ]

    operations = [
        migrations.CreateModel(
            name='Produto',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('description', models.TextField()),
                ('category', models.CharField(choices=[('FF', 'Fast Food'), ('AL', 'Almoço'), ('JA', 'Jantar'), ('CF', 'Café'), ('LC', 'Lanche'), ('SB', 'Sobremesa'), ('BD', 'Bebidas')], default='LC', max_length=2)),
            ],
            options={
                'verbose_name': 'Produto',
                'verbose_name_plural': 'Produtos',
            },
        ),
    ]
