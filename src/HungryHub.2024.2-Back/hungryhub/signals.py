from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import Group
from hungryhub.models import Cliente

@receiver(post_save, sender=Cliente)
def add_user_to_group(sender, instance, created, **kwargs):
    if created:
        group = Group.objects.get(name='Clientes')
        instance.groups.add(group)
