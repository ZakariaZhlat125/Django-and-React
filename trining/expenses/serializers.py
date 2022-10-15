from dataclasses import fields
from rest_framework import serializers
from django.forms import forms

from .models import Expense


class ExpensesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields =  "__all__"
