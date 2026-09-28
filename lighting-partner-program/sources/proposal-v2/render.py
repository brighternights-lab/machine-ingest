import asyncio, sys, subprocess, pathlib
from playwright.async_api import async_playwright
B = pathlib.Path(__file__).parent
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page()
        await pg.goto((B/'proposal.html').as_uri(), wait_until='networkidle')
        await pg.evaluate('document.fonts.ready')
        await pg.pdf(path=str(B/'Lighting_Partner_Program_Proposal.pdf'), width='8.5in', height='11in', print_background=True, prefer_css_page_size=True, margin={'top':'0','right':'0','bottom':'0','left':'0'})
        await b.close()
    subprocess.run(['pdftoppm','-r','70','-png',str(B/'Lighting_Partner_Program_Proposal.pdf'),str(B/'chk')],check=True)
    print(subprocess.run(['pdfinfo',str(B/'Lighting_Partner_Program_Proposal.pdf')],capture_output=True,text=True).stdout)
asyncio.run(main())
