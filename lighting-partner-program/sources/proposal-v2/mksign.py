from reportlab.pdfgen import canvas
from reportlab.lib.colors import white, HexColor
import glob
H=792; W=612
fs=sorted(glob.glob('flat/pg-*.jpg'))
assert len(fs)==18
c=canvas.Canvas('Accelerate_Lighting_Partners_Proposal_and_Agreement.pdf',pagesize=(W,H))
c.setTitle('Accelerate Lighting Partners Proposal and Agreement'); c.setAuthor('Accelerate Lighting Partners')
def field(name,x,ytop_caption,w,h=16,font='Helvetica',size=10.5,tip=''):
    # place field so its bottom sits just above the caption (top-left coords in, pdf coords out)
    y=H-ytop_caption+2
    c.acroForm.textfield(name=name,x=x,y=y,width=w,height=h,borderWidth=0,borderColor=None,fillColor=None,textColor=white,fontName=font,fontSize=size,forceBorder=False,tooltip=tip or name,maxlen=120)
for i,f in enumerate(fs,1):
    c.drawImage(f,0,0,W,H)
    if i in (15,16,17):
        x0=441 if i==15 else 440
        c.acroForm.textfield(name=f'initials_A{i-14}',x=x0,y=H-770+1,width=34,height=13,borderWidth=0,borderColor=None,fillColor=None,textColor=HexColor('#5BE3DD'),fontName='Helvetica-Bold',fontSize=9,forceBorder=False,tooltip='Partner initials',maxlen=6)
    if i==18:
        field('accelerate_signature',58,472.4,225,font='Helvetica-Oblique',size=13,tip='Accelerate signature, type full name')
        field('accelerate_date',58,508.4,120,tip='Date')
        field('partner_company_legal_name',318,472.4,225,tip='Company legal name')
        field('partner_signature',318,508.4,225,font='Helvetica-Oblique',size=13,tip='Partner signature, type full name and title')
        field('partner_date',318,544.4,120,tip='Date')
        field('partner_ein',318,579.7,110,tip='Business EIN')
        field('partner_email',436,579.7,110,size=9,tip='Email for notices')
        field('partner_territory',318,615.7,225,tip='Territory, county and state')
        for k,x in enumerate((344.4,414.9,491.4)):
            c.acroForm.textfield(name=f'term_initials_{k+1}yr',x=x-2,y=H-669.7-1,width=25,height=14,borderWidth=0,borderColor=None,fillColor=None,textColor=HexColor('#5BE3DD'),fontName='Helvetica-Bold',fontSize=10,forceBorder=False,tooltip=f'Initial here for a {k+1} year Committed Term',maxlen=6)
    c.showPage()
c.save()
