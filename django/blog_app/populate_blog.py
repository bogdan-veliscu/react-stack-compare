import os
import django
import random
from faker import Faker
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blog_app.settings')


django.setup()

# FAKE POP SCRIPT
fakegen = Faker()
topics = ['Search', 'Social', 'Marketplace']


def add_topic():
    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t


def populate(N=20):
    for entry in range(N):
        # get the topic for the entry
        top = add_topic()

        # create fake data
        fake_url = fakegen.url()
        fake_date = fakegen.date()
        fake_name = fakegen.company()

        # create webpage entry

        page = Webpage.objects.get_or_create(
            topic=top, url=fake_url, name=fake_name)[0]

        # create fake access record
        acc_rec = AccessRecord.objects.get_or_create(
            name=page, date=fake_date)[0]


if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blog_app.settings')
    from blog.models import AccessRecord, Webpage, Topic
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from excd

    # settings.configure()
    print("# populating script!")
    populate(29)
    print("# populating complete!")
