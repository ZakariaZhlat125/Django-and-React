from django.urls import path

from .views import ExpenseList,ExpenseCreates
urlpatterns = [
    path('',ExpenseList.as_view()),
    path('create/',ExpenseCreates.as_view()),
]
