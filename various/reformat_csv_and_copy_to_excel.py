import os

import pandas as pd


def reformat_file(file):
    fin = open(file, "rt")

    data = fin.read()
    data = data.replace(',', ';')
    data = data.replace('.', ',')

    fin.close()
    fin = open(file.split('.csv')[0] + "_reformatted.csv", "wt")

    fin.write(data)
    fin.close()


def make_excel(file):
    filepath_in = file + "_reformatted.csv"
    filepath_out = file + ".xlsx"
    pd.read_csv(filepath_in, delimiter=";").to_excel(filepath_out, header=True, index=False)
    os.remove(filepath_in)


if __name__ == '__main__':
    file = input("Which file?: ")
    reformat_file(file)
    make_excel(file.split('.csv')[0])
    os.startfile(file.split('.csv')[0] + ".xlsx")
