from django.db import migrations
from django.contrib.auth.models import Group, Permission

def create_groups(apps, schema_editor):
    group = Group.objects.create(name='Clientes')
    permissions = Permission.objects.all()
    group.permissions.set(permissions)

class Migration(migrations.Migration):
    dependencies = [
        ('hungryhub', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_groups),
    ]