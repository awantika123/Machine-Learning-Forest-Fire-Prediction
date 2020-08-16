#!C:\Users\Lenovo\AppData\Local\Programs\Python\Python37-32\python.exe

import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import warnings
import pickle


warnings.filterwarnings("ignore")

# data = pd.read_csv("Forest_fire.csv")
# data = np.array(data)

# X = data[1:, 1:-1]
# y = data[1:, -1]
# y = y.astype('int')
# X = X.astype('int')

# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)
# log_reg = LogisticRegression()
# log_reg.fit(X_train, y_train)
# pickle.dump(log_reg,open('model.pkl','wb'))


import sys 
import pickle
filename = 'model.pkl'
loaded_model = pickle.load(open(filename, 'rb'))
x = np.asarray([int(sys.argv[1]), int(sys.argv[2]),int(sys.argv[3])])
x = x.reshape((1,-1))
y =loaded_model.predict(x)
print(str(y))
# model=pickle.load(open('model.pkl','rb'))







