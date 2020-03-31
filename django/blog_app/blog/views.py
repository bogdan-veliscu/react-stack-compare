from django.shortcuts import render
from django.http import HttpResponse
from blog.models import Topic, Webpage, AccessRecord

# Create your views here.


def index(request):
    webpage_list = AccessRecord.objects.order_by('date')
    date_dict = {'access_records': webpage_list}
    return render(request, 'blog/index.html', context=date_dict)
