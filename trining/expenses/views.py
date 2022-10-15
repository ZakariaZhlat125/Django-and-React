import json
from rest_framework import generics


from .models import Expense 
from .serializers import ExpensesSerializers 


class ExpenseList(generics.ListAPIView):
    queryset=Expense.objects.all()
    serializer_class = ExpensesSerializers

class ExpenseCreates(generics.CreateAPIView):
    queryset=Expense.objects.all()
    serializer_class = ExpensesSerializers
    