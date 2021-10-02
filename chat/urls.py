from django.urls import path
from . import views

urlpatterns=[


    #API Routes
    path("search_contact/<str:person>",views.search_contact, name = "search_contact"),

    path("",views.index, name="index"),
    path("login", views.login_view, name="login_view"),
    path("register", views.register, name = "register"),
    path("logout", views.logout_view, name="logout_view"),
    path("<int:room_name>", views.chatroom, name="chatroom"),

]


