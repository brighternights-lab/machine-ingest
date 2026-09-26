from reportlab.lib.pagesizes import letter
from reportlab.platypus import BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER

W,H=letter
INK=HexColor('#D8DBE3'); MUTED=HexColor('#8C93A6'); PINK=HexColor('#FF0EAA'); MINT=HexColor('#9AD9C2'); TEAL=HexColor('#5BE3DD'); WHITE=HexColor('#FFFFFF')
def bg(c,d):
    c.saveState(); c.drawImage('bg_a.jpg',0,0,W,H); c.setFillColor(MUTED); c.setFont('Helvetica',7.5)
    c.drawString(0.7*inch,0.45*inch,'BRIGHTER NIGHTS  ·  LIGHTING PARTNER PROGRAM  ·  CONTRACTOR PROPOSAL'); c.drawRightString(W-0.7*inch,0.45*inch,str(d.page)); c.restoreState()
def cover(c,d):
    c.saveState(); c.drawImage('hero.jpg',0,0,W,H,preserveAspectRatio=True,anchor='c'); c.drawImage('bg_a.jpg',0,0,W,H*0.42)
    c.drawImage('logo.png',0.8*inch,H-2.2*inch,0.85*inch,1.18*inch,mask='auto')
    c.setFillColor(PINK); c.setFont('Helvetica-Bold',10); c.drawString(0.8*inch,H-2.6*inch,'L I G H T I N G   P A R T N E R   P R O G R A M')
    c.setFillColor(WHITE); c.setFont('Helvetica-Bold',30); c.drawString(0.8*inch,H-3.4*inch,'You run the jobs.'); c.drawString(0.8*inch,H-3.9*inch,'We run your growth.')
    c.setFillColor(INK); c.setFont('Helvetica',12.5)
    for i,l in enumerate(['A full lighting business build out, paid for as a sliding share of what','you actually earn. Every fee dollar buys you the site outright.']): c.drawString(0.8*inch,H-4.5*inch-i*0.24*inch,l)
    c.setFillColor(MUTED); c.setFont('Helvetica',9.5); c.drawString(0.8*inch,1.1*inch,'Brighter Nights Lighting Technologies  ·  Sanford, FL  ·  407-469-7093  ·  brighternights.com')
    c.drawString(0.8*inch,0.85*inch,'Founding round  ·  10 seats nationwide  ·  Prepared September 2026'); c.restoreState()
doc=BaseDocTemplate('Lighting_Partner_Program_Proposal.pdf',pagesize=letter,leftMargin=0.8*inch,rightMargin=0.8*inch,topMargin=0.8*inch,bottomMargin=0.8*inch)
fr=Frame(0.8*inch,0.8*inch,W-1.6*inch,H-1.6*inch,id='f')
doc.addPageTemplates([PageTemplate(id='cover',frames=[fr],onPage=cover),PageTemplate(id='body',frames=[fr],onPage=bg)])
h=ParagraphStyle('h',fontName='Helvetica-Bold',fontSize=17,textColor=WHITE,spaceBefore=10,spaceAfter=7,leading=21)
sub=ParagraphStyle('s',fontName='Helvetica-Bold',fontSize=11,textColor=PINK,spaceBefore=8,spaceAfter=4)
p=ParagraphStyle('p',fontName='Helvetica',fontSize=10.2,textColor=INK,leading=14.5,spaceAfter=6)
cell=ParagraphStyle('c',fontName='Helvetica',fontSize=9.5,textColor=INK,leading=12.5)
sm=ParagraphStyle('sm',fontName='Helvetica',fontSize=8.5,textColor=MUTED,leading=11.5,spaceAfter=4)
def T(rows,cw,hl=True):
    t=Table(rows,colWidths=cw); st=[('FONTNAME',(0,0),(-1,-1),'Helvetica'),('FONTSIZE',(0,0),(-1,-1),9.5),('TEXTCOLOR',(0,0),(-1,-1),INK),('LINEBELOW',(0,0),(-1,-1),0.4,HexColor('#2A2F44')),('TOPPADDING',(0,0),(-1,-1),5),('BOTTOMPADDING',(0,0),(-1,-1),5),('VALIGN',(0,0),(-1,-1),'MIDDLE')]
    if hl: st+=[('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'),('TEXTCOLOR',(0,0),(-1,0),MUTED),('FONTSIZE',(0,0),(-1,0),8.5),('BACKGROUND',(0,0),(-1,0),HexColor('#1A1F2E'))]
    t.setStyle(TableStyle(st)); return t
S=[]
from reportlab.platypus.flowables import Flowable
from reportlab.platypus import NextPageTemplate
S.append(NextPageTemplate('body')); S.append(Spacer(1,H-2*inch)); S.append(PageBreak())
S+= [Paragraph('What this is',h),
Paragraph("Brighter Nights builds your entire lighting business growth engine, under your brand, in your exclusive county. Website, SEO, instant estimates, online booking, AI assistant, tracking, ad accounts, a library of thousands of real install photos and videos, sales collateral, three playbooks, and Masters of Lighting Academy training. You focus on the work. We handle the rest, and you pay only as a percentage of what you actually earn.",p),
Paragraph('What you get',sub),
Paragraph("<b>A fully built website</b> with your own brand, SEO set up from day one, online booking with deposits, and instant estimate tools your customers use themselves. <b>An AI assistant</b> trained on permanent lighting that answers product and pricing questions around the clock. <b>A CRM built into the site</b>, call tracking, and a rankings dashboard so every lead is sourced. <b>Full access to our photo and video library.</b> <b>Sales, bidding, and install support</b> whenever you need it, plus ongoing marketing and advertising help. <b>A shared partner community</b> with the Masters of Lighting Academy. <b>Product supplied through distribution</b>, stocked nationwide, 3 to 5 day delivery.",p),
Paragraph('How it is paid for',sub),
Paragraph("No upfront bill. You pay a sliding percentage of your gross lighting revenue, and the percentage goes down as you grow. Each tier only applies to the dollars inside it, like tax brackets.",p),
T([['Your annual gross revenue','Fee on that portion'],['First $250,000','7%'],['$250,000 to $500,000','6%'],['$500,000 to $750,000','5%'],['$750,000 to $1,000,000','4%'],['Above $1,000,000','3%']],[4.2*inch,2.3*inch]),
Spacer(1,6),
Paragraph("At $500,000 gross the fee is $32,500 (6.5% blended). At $1,000,000 it is $55,000 (5.5%). At $1,500,000 it is $70,000 (4.7%). We reinvest 30% of our fee directly into advertising for your business and ask you to match that 30% into your own local marketing.",p),
PageBreak(),
Paragraph('Your site has a real, stated value',h),
Paragraph("Every site we build carries a stated dollar value. We call it the ledger. It is set by our Site Value Evaluator, which prices what we built three ways.",p),
T([['','Amount'],[Paragraph('<b>Part 1  ·  Market replacement cost</b> of everything built (custom site, SEO, estimator, booking, AI assistant, tracking, photo and video library, CRM, ads setup, collateral, playbooks, MOLA, hosting), priced at 2026 published agency and freelance rates',cell),'$102,650'],[Paragraph('<b>Part 2  ·  Your time</b> not spent teaching a generic marketing agency permanent lighting, correcting their work, and sourcing photos and video (180 hours at $150 an hour)',cell),'$27,000'],[Paragraph('<b>Part 3  ·  Revenue not lost</b> to a typical 4 to 8 month agency launch (5 months at $41,000 a month, 35% of jobs driven by the site)',cell),'$71,750'],[Paragraph('<b>Ledger opening value</b>',cell),Paragraph('<b><font color="#FF0EAA">$201,400</font></b>',cell)]],[5.3*inch,1.2*inch]),
Spacer(1,6),
Paragraph("Your numbers may differ. The evaluator is live, and your weekly report shows the exact balance.",sm),
Paragraph('Every fee dollar buys the site',sub),
Paragraph("<b>100% of every fee dollar you pay us credits against the ledger.</b> Once your credits reach the full amount, you own your site outright. No more fees, no more strings, and you keep the domain, the content license, and your ad accounts.",p),
Paragraph("<i>Example: a partner growing from $500,000 to $1.6 million in annual revenue over five years pays $32,500, $45,000, $55,000, $64,000, and $73,000 in fees. Cumulative credit passes $201,400 during year five, and the site is theirs. Faster growth pays it off sooner.</i>",p),
Paragraph('Want more than the base site',sub),
Paragraph("If you want something added, extra automation, more pages, a new tool, just ask. We price it off a rate card, send a written quote, and build only after your written approval. It goes on the ledger at that price on the day it ships. Routine maintenance and hosting never raise the ledger. If your add on pace projects a buyout past year seven we flag it before you approve.",p),
Paragraph('Why this also helps you sell your business someday',sub),
Paragraph("Because the site has a real, stated dollar value, it is a business asset you can point to, the same way you would list a truck or equipment, if you ever sell your company or bring on a partner.",p),
PageBreak(),
Paragraph('Beyond launch',h),
Paragraph("This is not a one time build. Starting the week after your site launches you get a weekly report showing the current ledger balance, what was added and what it cost, what it would cost to buy out today, your current fee tier, and your keyword rankings. You have 1 to 2 hours a week with your partner manager. We review competitor sites and propose what to add to yours.",p),
Paragraph('Terms in plain language',sub),
T([['Term','3 years, county exclusive, your own brand name'],['Fee','Sliding scale on gross lighting revenue, reported monthly, verified against distributor purchases'],['Reinvestment','30% of our fee into your ads, matched by you'],['Ledger','Set by the Site Value Evaluator at launch, add ons added at rate card on ship date'],['Credit','100% of every fee dollar credits the ledger'],['Buyout','Any time: ledger balance plus 3 months trailing fee, minus fees already credited'],['On exit','You keep domain, content license, ad accounts, licensed use of the photo library'],['Equity','Optional conversion clause available, not required'],['Cancel','Any time, ledger math still applies']],[1.3*inch,5.2*inch],hl=False),
Spacer(1,8),
Paragraph('Next steps',sub),
T([['1','Qualification call (20 minutes)'],['2','Territory check and seat offer'],['3','Agreement signed, attorney language mirrors the terms above'],['4','Site, tools, and ads built in 2 to 4 weeks'],['5','MOLA onboarding and first bids'],['6','Launch, weekly reports begin the following week']],[0.4*inch,6.1*inch],hl=False),
Spacer(1,10),
Paragraph("Ten seats nationwide, one per county, two onboarded a month. When your county is taken, it is taken.",p),
Paragraph("Austen Stucki, CEO  ·  407-469-7093  ·  austen@brighternights.com  ·  brighternights.com",sm)]
doc.build(S)
print('ok')
