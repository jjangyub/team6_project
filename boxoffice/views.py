from django.shortcuts import render,redirect,get_object_or_404

# Create your views here.
def m_list(request):

    return render(request, 'boxoffice/list.html')