# Regenerates bg_a/b/c.jpg gradient backgrounds. hero.jpg = roofline-compare-night.webp from brighternights.com, 16:9 crop, brightness 0.34. logo.png = bnl-bulb-logo.png.
from PIL import Image, ImageDraw, ImageFilter, ImageChops
W,H=1920,1080
def bg(name,pink=(0.15,0.0,0.55),teal=(0.9,1.0,0.30)):
    img=Image.new('RGB',(W,H)); px=img.load()
    for y in range(H):
        for x in range(W):
            k=(y/H*0.7+x/W*0.3); px[x,y]=(int(14-9*k),int(17-11*k),int(27-16*k))
    glow=Image.new('RGB',(W,H),(0,0,0)); d=ImageDraw.Draw(glow)
    cx,cy=int(pink[0]*W),int(pink[1]*H); R=900; d.ellipse([cx-R,cy-R,cx+R,cy+R],fill=(255,14,170))
    cx,cy=int(teal[0]*W),int(teal[1]*H); R=700; d.ellipse([cx-R,cy-R,cx+R,cy+R],fill=(91,227,221))
    glow=glow.filter(ImageFilter.GaussianBlur(320)); glow=Image.eval(glow,lambda v:int(v*0.45))
    ImageChops.add(img,glow).save(name,quality=90)
bg('bg_a.jpg'); bg('bg_b.jpg',pink=(0.85,1.0,0.5),teal=(0.1,0.0,0.3)); bg('bg_c.jpg',pink=(0.5,0.0,0.45),teal=(0.5,1.0,0.35))
