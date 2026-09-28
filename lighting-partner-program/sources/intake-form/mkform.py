from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, Color
from PIL import Image
import io
W,H=612,792
GROUND=HexColor('#0B0E18'); CARD=HexColor('#111726'); CYAN=HexColor('#5BE3DD'); MAG=HexColor('#EC008C'); PINK=HexColor('#FF4FB3'); INK=HexColor('#EAF2F8'); MUTED=HexColor('#9FB4C7'); TEAL=HexColor('#00A9B5'); ORANGE=HexColor('#FF7A1A')
def bg(c):
    c.setFillColor(GROUND); c.rect(0,0,W,H,fill=1,stroke=0)
    g=Image.new('RGB',(600,8))
    for x in range(600):
        t=x/599; a=(0,169,181); b=(236,0,140); o=(255,122,26)
        col=tuple(int(a[i]+(b[i]-a[i])*t*2) for i in range(3)) if t<.5 else tuple(int(b[i]+(o[i]-b[i])*(t-.5)*2) for i in range(3))
        for y in range(8): g.putpixel((x,y),col)
    c.drawInlineImage(g,0,H-5,W,5)
    # soft corner glows drawn as stacked translucent circles
    for i in range(40):
        c.setFillColor(Color(0.93,0,0.55,alpha=0.006)); c.circle(W-20,40,220-i*4,fill=1,stroke=0)
        c.setFillColor(Color(0,0.66,0.71,alpha=0.006)); c.circle(10,H*0.55,200-i*4,fill=1,stroke=0)
def foot(c,n):
    c.setFillColor(MUTED); c.setFont('Helvetica',7.5)
    c.drawString(40,28,'ACCELERATE LIGHTING PARTNERS  ·  PARTNER INTAKE'); c.drawRightString(W-40,28,f'{n} of 2')
def head(c,t):
    c.setFillColor(CYAN); c.setFont('Helvetica-Bold',10); c.drawString(40,H-52,t)
def sect(c,y,t):
    c.setFillColor(PINK); c.setFont('Helvetica-Bold',8.5); c.drawString(40,y,t.upper())
    c.setStrokeColor(HexColor('#2A3350')); c.setLineWidth(.6); c.line(40,y-5,W-40,y-5)
def fld(c,name,label,x,y,w,h=22,multi=False):
    c.setFillColor(MUTED); c.setFont('Helvetica',7.3); c.drawString(x,y+h+3,label)
    c.acroForm.textfield(name=name,x=x,y=y,width=w,height=h,borderColor=TEAL,fillColor=CARD,textColor=INK,fontName='Helvetica',fontSize=9,borderWidth=1,forceBorder=True,fieldFlags='multiline' if multi else '',maxlen=500)
def row(c,y,items,h=22):
    tot=W-80; gap=10; n=len(items); x=40
    ws=[it[2] for it in items]; s=sum(ws); ws=[(tot-gap*(n-1))*w/s for w in ws]
    for it,w in zip(items,ws):
        fld(c,it[0],it[1],x,y,w,h,multi=(h>30)); x+=w+gap
c=canvas.Canvas('Accelerate_Partner_Intake_Form.pdf',pagesize=(W,H)); c.setTitle('Accelerate Lighting Partners Partner Intake'); c.setAuthor('Accelerate Lighting Partners')
# page 1
bg(c); head(c,'LIGHTING PARTNER PROGRAM')
c.drawImage('lockup.png',W-40-96,H-28-63,96,63,mask='auto')
c.setFillColor(INK); c.setFont('Helvetica-Bold',24); c.drawString(40,H-88,'Partner intake')
c.setFillColor(CYAN); c.setFont('Helvetica-Bold',24); c.drawString(40+c.stringWidth('Partner intake ','Helvetica-Bold',24),H-88,'form')
c.setFillColor(MUTED); c.setFont('Helvetica',9); 
for i,l in enumerate(['Fill in what you have. Skip what you do not, we will help you get it. Save the file and email it to austen@brighternights.com.','Your site goes live within 14 days after we have everything on these two pages.']): c.drawString(40,H-108-i*12,l)
y=H-150; sect(c,y,'Your contact'); y-=42
row(c,y,[('contact_name','Your name',1),('contact_title','Title',1)]); y-=42
row(c,y,[('contact_email','Email for notices',1),('contact_phone','Mobile phone',1)]); y-=36
sect(c,y,'Business'); y-=42
row(c,y,[('legal_name','Company legal name',1),('brand_name','Brand name on the site',1)]); y-=42
row(c,y,[('entity','Entity type and state',1),('ein','Business EIN',1),('years','Years in business, crew size',1)]); y-=42
row(c,y,[('address','Business address',2),('hours','Business hours',1)]); y-=42
row(c,y,[('coi','Certificate of insurance ($1M general liability), file name or link',1)]); y-=36
sect(c,y,'Territory'); y-=42
row(c,y,[('county','Your county and state',1),('radius','Service radius, areas you skip',1)]); y-=42
y-=22; row(c,y,[('cities','Cities and towns you serve (used for your city pages)',1)],h=44); y-=44
row(c,y,[('distributor','Your distributor',1),('rep','Distributor rep contact',1)]); y-=36
sect(c,y,'Brand'); y-=42
row(c,y,[('logo','Logo files, share link',1),('colors','Brand colors and fonts',1)]); y-=42
row(c,y,[('tagline','Tagline',1),('voice','How you talk to customers (friendly, premium, no nonsense)',1)]); y-=8
foot(c,1); c.showPage()
# page 2
bg(c); head(c,'LIGHTING PARTNER PROGRAM')
y=H-90; sect(c,y,'Pricing for your instant estimate'); y-=42
row(c,y,[('price_ft','Price per linear foot by system (roofline, landscape, other)',2),('minjob','Minimum job size',1)]); y-=42
row(c,y,[('deposit','Deposit amount for booking',1),('financing','Financing partner, if any',1),('warranty','Warranty and guarantee you offer',1)]); y-=36
sect(c,y,'Photos, video, and proof'); y-=42
row(c,y,[('photos','Best install photos and video, share link',1),('team','Team photos and short bios, share link',1)]); y-=42
row(c,y,[('reviews','Reviews and testimonials, links',1),('badges','Awards and badges to show',1)]); y-=36
sect(c,y,'Accounts we need access to'); y-=42
row(c,y,[('registrar','Domain registrar, if you own one',1),('gbp','Google Business Profile email',1)]); y-=42
row(c,y,[('ga','Google Analytics and Search Console email',1),('ads','Google Ads and Meta ad accounts',1)]); y-=42
row(c,y,[('trackphone','Phone number for call tracking and texts',1),('calendar','Calendar and payment processor for deposits',1)]); y-=36
sect(c,y,'Anything else'); y-=80
row(c,y,[('notes','Notes, questions, special requests',1)],h=60); y-=24
c.setStrokeColor(MAG); c.setLineWidth(1.2); c.roundRect(40,y-52,W-80,52,8,fill=0,stroke=1)
c.setFillColor(PINK); c.setFont('Helvetica-Bold',8); c.drawString(54,y-16,'HOW TO SEND IT')
c.setFillColor(INK); c.setFont('Helvetica',9)
c.drawString(54,y-30,'Save this file and email it, with your files and links, to austen@brighternights.com.')
c.drawString(54,y-42,'We build from what you send. The 14 day clock starts when the last item arrives.')
foot(c,2); c.showPage(); c.save()
