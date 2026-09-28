import sys
from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject, DictionaryObject, BooleanObject
def fix(src,dst):
    r=PdfReader(src); w=PdfWriter(); w.append(r)
    af=w._root_object['/AcroForm']
    def font(base): 
        d=DictionaryObject({NameObject('/Type'):NameObject('/Font'),NameObject('/Subtype'):NameObject('/Type1'),NameObject('/BaseFont'):NameObject(base),NameObject('/Encoding'):NameObject('/WinAnsiEncoding')})
        return w._add_object(d)
    fonts=DictionaryObject({NameObject('/Helv'):font('/Helvetica'),NameObject('/HeOb'):font('/Helvetica-Oblique'),NameObject('/HeBo'):font('/Helvetica-Bold')})
    af[NameObject('/DR')]=DictionaryObject({NameObject('/Font'):fonts})
    af[NameObject('/NeedAppearances')]=BooleanObject(True)
    w.write(dst)
fix(sys.argv[1],sys.argv[2])
