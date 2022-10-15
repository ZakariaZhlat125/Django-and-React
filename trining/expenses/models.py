from email.policy import default
from enum import unique
from turtle import title
from unicodedata import decimal
from django.db import models


class Expense(models.Model):
    #id=models.IntegerField(primary_key=True)
    title=models.CharField(max_length=150)
    date=models.DateField(blank=True,null=True)
    amount =models.DecimalField(max_digits=12,decimal_places=5,default=0.0)

    def __str__(self):
        return self.title
    