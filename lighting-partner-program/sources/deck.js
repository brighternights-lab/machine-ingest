const pptxgen = require('pptxgenjs');
const fs = require('fs');
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.33 x 7.5
const INK='D8DBE3', MINT='9AD9C2', PINK='FF0EAA', MUTED='8C93A6', WHITE='FFFFFF', TEAL='5BE3DD';
const F='Arial';
const BGS=['bg_a.jpg','bg_b.jpg','bg_c.jpg'];
let n=0;
function slide(bgIdx){ const s=pres.addSlide(); s.background={path:BGS[bgIdx%3]}; n++;
  s.addText('BRIGHTER NIGHTS  ·  LIGHTING PARTNER PROGRAM',{x:0.5,y:7.0,w:8,h:0.3,fontFace:F,fontSize:9,color:MUTED,charSpacing:2,isTextBox:true,margin:0});
  s.addText(String(n),{x:12.3,y:7.0,w:0.6,h:0.3,fontFace:F,fontSize:9,color:MUTED,align:'right',isTextBox:true,margin:0});
  return s; }
function title(s,t,sub){ s.addText(t,{x:0.6,y:0.45,w:12.1,h:0.9,fontFace:F,fontSize:30,bold:true,color:WHITE,isTextBox:true,margin:0});
  if(sub) s.addText(sub,{x:0.6,y:1.3,w:12.1,h:0.5,fontFace:F,fontSize:14,color:MUTED,isTextBox:true,margin:0}); }
function card(s,x,y,w,h){ s.addShape(pres.shapes.ROUNDED_RECTANGLE,{x,y,w,h,rectRadius:0.12,fill:{color:WHITE,transparency:96},line:{color:WHITE,transparency:87,width:0.75}}); }
function stat(s,x,y,w,big,label,c){ card(s,x,y,w,1.5); s.addText(big,{x:x+0.2,y:y+0.15,w:w-0.4,h:0.75,fontFace:F,fontSize:30,bold:true,color:c||PINK,isTextBox:true,margin:0}); s.addText(label,{x:x+0.2,y:y+0.9,w:w-0.4,h:0.5,fontFace:F,fontSize:11,color:INK,isTextBox:true,margin:0,valign:'top'}); }
function pill(s,x,y,w,t,c){ s.addShape(pres.shapes.ROUNDED_RECTANGLE,{x,y,w,h:0.48,rectRadius:0.24,fill:{color:'000000',transparency:100},line:{color:c||PINK,width:1.25}}); s.addText(t,{x,y,w,h:0.48,fontFace:F,fontSize:11,bold:true,color:c||PINK,align:'center',valign:'middle',charSpacing:1,isTextBox:true,margin:0}); }
function bullets(s,items,x,y,w,h,fs){ s.addText(items.map((t,i)=>({text:t,options:{bullet:true,breakLine:i<items.length-1,paraSpaceAfter:8}})),{x,y,w,h,fontFace:F,fontSize:fs||14,color:INK,valign:'top',isTextBox:true,margin:0}); }
function src(s,t){ s.addText('Source: '+t,{x:0.6,y:6.65,w:12,h:0.3,fontFace:F,fontSize:8,color:MUTED,isTextBox:true,margin:0}); }
const chartBase={catAxisLabelColor:INK,valAxisLabelColor:MUTED,valGridLine:{color:'2A2F44',size:0.5},catGridLine:{style:'none'},catAxisLabelFontFace:F,valAxisLabelFontFace:F,dataLabelFontFace:F,dataLabelColor:WHITE,dataLabelFontSize:10,showLegend:false,showTitle:false,valAxisLabelFontSize:9,catAxisLabelFontSize:10};

// 1 Title
{ const s=pres.addSlide(); s.background={path:'hero.jpg'}; n++;
  s.addImage({path:'logo.png',x:0.7,y:0.6,w:0.9,h:1.25});
  s.addText('LIGHTING PARTNER PROGRAM',{x:0.7,y:2.4,w:10,h:0.4,fontFace:F,fontSize:13,color:PINK,charSpacing:4,bold:true,isTextBox:true,margin:0});
  s.addText('You run the jobs.\nWe run your growth. Launch and beyond.',{x:0.7,y:2.9,w:11.5,h:2.0,fontFace:F,fontSize:40,bold:true,color:WHITE,isTextBox:true,margin:0});
  s.addText('A full lighting business build out, paid for as a sliding share of what you actually earn. Every fee dollar buys you the site outright.',{x:0.7,y:5.0,w:9.5,h:0.9,fontFace:F,fontSize:16,color:INK,isTextBox:true,margin:0});
  s.addText('Brighter Nights Lighting Technologies  ·  Founding round, 10 seats nationwide',{x:0.7,y:6.6,w:11,h:0.4,fontFace:F,fontSize:11,color:MUTED,isTextBox:true,margin:0});
}
// 2 Problem
{ const s=slide(0); title(s,'Every contractor hits the same wall',"Getting into permanent lighting is easy. Getting found, quoting fast, and closing is the hard part.");
  const pts=[['No website that converts','Template sites, no estimator, no booking, no photos of real installs.'],['Nobody teaches lighting sales','Bids, upsells, controller demos, seasonal programming. You learn it the expensive way.'],['Marketing agencies do not know lighting','$2K to $10K a month, 4 to 8 months to launch, and the site disappears when you cancel.'],['No proof to show homeowners','Your first jobs are your only portfolio.'],['Franchises take the upside','$20K to $75K upfront plus 6 to 10% forever, and you build their brand.']];
  pts.forEach((p,i)=>{ const col=i%3, row=Math.floor(i/3); const x=0.6+col*4.15, y=2.0+row*2.25; card(s,x,y,3.95,2.05);
    s.addText(p[0],{x:x+0.25,y:y+0.2,w:3.5,h:0.5,fontFace:F,fontSize:15,bold:true,color:WHITE,isTextBox:true,margin:0});
    s.addText(p[1],{x:x+0.25,y:y+0.75,w:3.5,h:1.2,fontFace:F,fontSize:12,color:INK,isTextBox:true,margin:0,valign:'top'}); });
  src(s,'Scorpion, Blue Corona, Hook Agency published pricing 2026; FMS Franchise, Franchise Creator royalty benchmarks 2026');
}
// 3 Promise
{ const s=slide(1); title(s,'The promise','We build the whole growth engine around your brand, and we keep running it.');
  const items=[['Launch','Website, SEO, instant estimates, online booking, AI assistant, tracking, ad accounts, photo and video library.'],['Train','Masters of Lighting Academy, three playbooks, sales and bid support, install troubleshooting.'],['Grow','Weekly rankings report, standing check ins, competitor site reviews, matched ad spend, ongoing builds.'],['Own','Every fee dollar credits toward the site. Earn it out and it is yours, domain, content, ad accounts.']];
  items.forEach((it,i)=>{ const x=0.6+i*3.1; card(s,x,2.1,2.9,4.2); s.addText(it[0],{x:x+0.25,y:2.35,w:2.5,h:0.6,fontFace:F,fontSize:22,bold:true,color:PINK,isTextBox:true,margin:0}); s.addText(it[1],{x:x+0.25,y:3.0,w:2.45,h:3.1,fontFace:F,fontSize:13,color:INK,isTextBox:true,margin:0,valign:'top'}); });
}
// 4 Who it's for
{ const s=slide(2); title(s,'Who this is for','Founding round is 10 seats, one per county, two onboarded per month.');
  bullets(s,['Contractors already in a trade (roofing, electrical, landscape, pool, gutters) adding permanent lighting','Owner operators who can install and want to stop chasing leads','Willing to match 30% of our fee into local marketing','Exclusive county territory, your own brand name, no franchise','Pass a short qualification screen before a seat is offered'],0.6,2.1,7.2,4.2,15);
  stat(s,8.3,2.1,4.4,'10','founding seats nationwide');
  stat(s,8.3,3.8,4.4,'1 per county','exclusive territory, your name on the truck',MINT);
}
// 5 What you get
{ const s=slide(0); title(s,'What you get','Twelve pieces that normally cost $95K to $189K if you bought them one at a time.');
  const g=['Custom lighting website','SEO foundation and local rankings','Instant estimate tool','Online booking with deposits','AI assistant trained on lighting','Tracking and rankings dashboard','Photo and video library, thousands of installs','CRM built into the site','Ad accounts and landing pages','White labeled sales collateral','Three contractor playbooks','Masters of Lighting Academy'];
  g.forEach((t,i)=>{ const col=i%3,row=Math.floor(i/3); const x=0.6+col*4.15,y=2.0+row*1.12; card(s,x,y,3.95,0.95); s.addText(t,{x:x+0.25,y:y,w:3.5,h:0.95,fontFace:F,fontSize:13,color:WHITE,bold:true,valign:'middle',isTextBox:true,margin:0}); });
  s.addText('Add install photos here before presenting',{x:0.6,y:6.55,w:6,h:0.3,fontFace:F,fontSize:8,color:MUTED,italic:true,isTextBox:true,margin:0});
}
// 6 MOLA
{ const s=slide(1); title(s,'Masters of Lighting Academy','Training and a partner community, so you are never figuring this out alone.');
  bullets(s,['Contractor Mastery Series, sales, bidding, install, troubleshooting','Live partner community, partners answer partners, moderators before Austen','Weekly office hours and standing check ins','Certified installer directory listing on brighternights.com','MOLA is training. MOL (Masters of Light) is our rep program. Different things.'],0.6,2.1,7.5,4.2,15);
  card(s,8.5,2.1,4.2,4.1); s.addText('Your time with us',{x:8.75,y:2.3,w:3.8,h:0.5,fontFace:F,fontSize:14,bold:true,color:PINK,isTextBox:true,margin:0});
  s.addText('1 to 2 hours a week with your partner manager. The rest of our time goes into building and ranking your site.',{x:8.75,y:2.9,w:3.7,h:3,fontFace:F,fontSize:13,color:INK,isTextBox:true,margin:0,valign:'top'});
}
// 7 Sliding scale
{ const s=slide(2); title(s,'How it is paid for','No upfront bill. A sliding share of gross lighting revenue that drops as you grow.');
  const rows=[['Your annual gross revenue','Fee on that portion'],['First $250,000','7%'],['$250,000 to $500,000','6%'],['$500,000 to $750,000','5%'],['$750,000 to $1,000,000','4%'],['Above $1,000,000','3%']];
  s.addTable(rows.map((r,i)=>r.map((c,j)=>({text:c,options:{bold:i===0||j===1,color:i===0?MUTED:(j===1?PINK:INK),fontSize:i===0?11:15,fontFace:F,fill:{color:i===0?'1A1F2E':'0E111B'},align:j===1?'right':'left',margin:[6,10,6,10]}}))),{x:0.6,y:2.1,w:7.2,colW:[4.8,2.4],border:{type:'solid',color:'2A2F44',pt:0.5},rowH:0.55});
  card(s,8.3,2.1,4.4,4.0); s.addText('Marginal, like tax brackets',{x:8.55,y:2.3,w:3.9,h:0.5,fontFace:F,fontSize:14,bold:true,color:PINK,isTextBox:true,margin:0});
  s.addText('Each tier only applies to the dollars inside it. At $1M gross the blended rate is 5.5%. At $1.5M it is 4.7%.\n\nWe reinvest 30% of our fee into your ads. You match that 30% locally.',{x:8.55,y:2.9,w:3.9,h:3,fontFace:F,fontSize:13,color:INK,isTextBox:true,margin:0,valign:'top'});
}
// 8 Dollars chart
{ const s=slide(0); title(s,'What it looks like in dollars','Fee by annual gross, marginal tier math. Your profit after fee stays above 90% at every level.');
  const cats=['$250K','$500K','$750K','$1M','$1.25M','$1.5M']; const fees=[17500,32500,45000,55000,62500,70000];
  s.addChart(pres.charts.BAR,[{name:'Annual fee',labels:cats,values:fees}],Object.assign({x:0.6,y:2.0,w:8,h:4.5,barDir:'col',chartColors:[PINK],showValue:true,dataLabelPosition:'outEnd',dataLabelFormatCode:'$#,##0',valAxisLabelFormatCode:'$#,##0'},chartBase));
  stat(s,9.0,2.0,3.7,'$32,500','fee at $500K gross (6.5% blended)');
  stat(s,9.0,3.7,3.7,'$55,000','fee at $1M gross (5.5% blended)',MINT);
  stat(s,9.0,5.4,3.7,'$70,000','fee at $1.5M gross (4.7% blended)',TEAL);
}
// 9 Reinvest
{ const s=slide(1); title(s,'We reinvest in you','30% of every fee dollar goes straight back into your ads. You match it.');
  const cats=['$500K','$1M','$1.5M']; const ours=[9750,16500,21000];
  s.addChart(pres.charts.BAR,[{name:'Our reinvestment',labels:cats,values:ours},{name:'Your match',labels:cats,values:ours}],Object.assign({x:0.6,y:2.0,w:7.5,h:4.5,barDir:'col',barGrouping:'stacked',chartColors:[PINK,TEAL],showValue:true,dataLabelPosition:'ctr',dataLabelFormatCode:'$#,##0',valAxisLabelFormatCode:'$#,##0',showLegend:true,legendPos:'b',legendColor:INK,legendFontFace:F},chartBase));
  card(s,8.5,2.0,4.2,4.5); s.addText('Combined ad budget',{x:8.75,y:2.2,w:3.8,h:0.5,fontFace:F,fontSize:14,bold:true,color:PINK,isTextBox:true,margin:0});
  s.addText('$19,500 a year at $500K gross\n$33,000 a year at $1M gross\n$42,000 a year at $1.5M gross\n\nManaged by us, tracked on your dashboard, every lead sourced.',{x:8.75,y:2.8,w:3.7,h:3.5,fontFace:F,fontSize:13,color:INK,isTextBox:true,margin:0,valign:'top'});
}
// 10 Site value evaluator (NEW)
{ const s=slide(2); title(s,'Your site has a real, stated value','We value every piece we build at what another company would charge, plus what it would cost you to teach an agency lighting.');
  const rows=[['Part 1  ·  Market replacement cost','$102,650'],['Custom site, SEO, estimator, booking, AI assistant, tracking, library, CRM, ads, collateral, playbooks, MOLA, hosting',''],['Part 2  ·  Your time not spent teaching an agency','$27,000'],['180 hours explaining lighting, correcting their work, sourcing photos and video, at $150 an hour',''],['Part 3  ·  Revenue not lost to a 5 month agency delay','$71,750'],['5 months, $41K a month, 35% of jobs driven by the site',''],['Ledger opening value','$201,400']];
  s.addTable(rows.map((r,i)=>r.map((c,j)=>({text:c,options:{bold:(i%2===0),color:i===6?PINK:(i%2===0?WHITE:MUTED),fontSize:i===6?16:(i%2===0?13:10),fontFace:F,fill:{color:i===6?'1A1F2E':'0E111B'},align:j===1?'right':'left',margin:[4,10,4,10]}}))),{x:0.6,y:2.0,w:8.2,colW:[6.4,1.8],border:{type:'solid',color:'2A2F44',pt:0.5}});
  card(s,9.1,2.0,3.6,4.5); s.addText('Live evaluator',{x:9.35,y:2.2,w:3.2,h:0.5,fontFace:F,fontSize:14,bold:true,color:PINK,isTextBox:true,margin:0});
  s.addText('Every line item has a low, mid, and high market rate. Check what was built, enter your numbers, and the ledger updates. Weekly report shows the live balance.',{x:9.35,y:2.8,w:3.1,h:3.5,fontFace:F,fontSize:12,color:INK,isTextBox:true,margin:0,valign:'top'});
  src(s,'2026 published agency and freelance rates for home service contractors, midpoint used');
}
// 11 Own it outright (100%)
{ const s=slide(0); title(s,'Every fee dollar buys the site','100% of what you pay us credits against the ledger. Reach it and the site is yours.');
  const cats=['Year 1','Year 2','Year 3','Year 4','Year 5']; const cum=[32500,77500,132500,196500,269500];
  s.addChart(pres.charts.LINE,[{name:'Cumulative fee credit',labels:cats,values:cum},{name:'Ledger $201,400',labels:cats,values:[201400,201400,201400,201400,201400]}],Object.assign({x:0.6,y:2.0,w:7.8,h:4.5,chartColors:[PINK,MINT],lineSize:3,lineDataSymbol:'circle',lineDataSymbolSize:8,showValue:false,valAxisLabelFormatCode:'$#,##0',showLegend:true,legendPos:'b',legendColor:INK,legendFontFace:F},chartBase));
  stat(s,8.8,2.0,3.9,'~Year 5','a partner growing $500K to $1.6M owns the site');
  stat(s,8.8,3.7,3.9,'100%','of every fee dollar credits the ledger',MINT);
  s.addText('On exit you keep the domain, the content license, and your ad accounts. No more fees.',{x:8.8,y:5.4,w:3.9,h:1.0,fontFace:F,fontSize:12,color:INK,isTextBox:true,margin:0});
}
// 12 Add-ons
{ const s=slide(1); title(s,'Want more than the base site','Add ons are your call. They raise the value of what you own and go on the ledger at rate card.');
  const steps=['You email the request','We price it off the rate card','Written quote to you','Your written approval, nothing builds without it','We ship it','Ledger updates on ship date, dashboard next week'];
  steps.forEach((t,i)=>{ const x=0.6+(i%3)*4.15, y=2.0+Math.floor(i/3)*1.6; card(s,x,y,3.95,1.4); s.addText(String(i+1),{x:x+0.25,y:y+0.2,w:0.6,h:0.6,fontFace:F,fontSize:26,bold:true,color:PINK,isTextBox:true,margin:0}); s.addText(t,{x:x+0.95,y:y+0.15,w:2.85,h:1.1,fontFace:F,fontSize:13,color:INK,valign:'middle',isTextBox:true,margin:0}); });
  s.addText('Routine maintenance never counts toward the ledger. Only things you ask for. If your add on pace projects a buyout past year 7 we flag it before you approve.',{x:0.6,y:5.4,w:12,h:0.9,fontFace:F,fontSize:12,color:MUTED,isTextBox:true,margin:0});
}
// 13 Beyond launch
{ const s=slide(2); title(s,'Beyond launch','This is not a one time build. We keep running your growth.');
  const items=[['Rankings dashboard','Keywords, positions, and every lead sourced, updated live.'],['Weekly report','Ledger balance, buyout price, fee tier, what shipped.'],['Standing check ins','1 to 2 hours a week with your partner manager.'],['Competitor reviews','We watch competitor sites and propose what to add.']];
  items.forEach((it,i)=>{ const x=0.6+i*3.1; card(s,x,2.1,2.9,3.8); s.addText(it[0],{x:x+0.25,y:2.35,w:2.5,h:0.6,fontFace:F,fontSize:16,bold:true,color:PINK,isTextBox:true,margin:0}); s.addText(it[1],{x:x+0.25,y:3.0,w:2.45,h:2.7,fontFace:F,fontSize:13,color:INK,isTextBox:true,margin:0,valign:'top'}); });
}
// 14 Industry stats
{ const s=slide(0); title(s,'The market is moving fast','Outdoor lighting is growing, and permanent lighting is the fastest piece of it.');
  s.addChart(pres.charts.BAR,[{name:'Outdoor lighting market ($B)',labels:['2024','2026','2028','2030'],values:[17.1,20.4,24.2,28.4]}],Object.assign({x:0.6,y:2.0,w:7.5,h:4.5,barDir:'col',chartColors:[TEAL],showValue:true,dataLabelPosition:'outEnd',dataLabelFormatCode:'$0.0"B"',valAxisLabelFormatCode:'$0"B"'},chartBase));
  stat(s,8.5,2.0,4.2,'45 to 60%','annual growth in permanent lighting installs');
  stat(s,8.5,3.7,4.2,'25 to 45%','typical margins on installed jobs',MINT);
  src(s,'Grand View Research outdoor lighting 2024 to 2030; Trimlight, Strandr dealer reports 2026');
}
// 15 CTR
{ const s=slide(1); title(s,'Ranking is the whole game','Position one on Google gets four times the clicks of position three.');
  s.addChart(pres.charts.BAR,[{name:'CTR',labels:['#1','#2','#3','#4','#5','#6 to 10'],values:[27.6,15.8,11.0,8.4,6.3,3.5]}],Object.assign({x:0.6,y:2.0,w:7.5,h:4.5,barDir:'col',chartColors:[PINK],showValue:true,dataLabelPosition:'outEnd',dataLabelFormatCode:'0.0"%"',valAxisLabelFormatCode:'0"%"'},chartBase));
  card(s,8.5,2.0,4.2,4.5); s.addText('What that means for you',{x:8.75,y:2.2,w:3.8,h:0.5,fontFace:F,fontSize:14,bold:true,color:PINK,isTextBox:true,margin:0});
  s.addText('A site built to rank for "permanent lighting" plus your county wins the click before the homeowner ever sees a competitor. Our SEO foundation ships on day one and we report on it weekly.',{x:8.75,y:2.8,w:3.7,h:3.5,fontFace:F,fontSize:13,color:INK,isTextBox:true,margin:0,valign:'top'});
  src(s,'First Page Sage Google CTR study 2026');
}
// 16 Instant tools
{ const s=slide(2); title(s,'Instant tools close more jobs','Homeowners who can price and book on the spot convert at two to four times the rate.');
  s.addChart(pres.charts.BAR,[{name:'Relative conversion',labels:['Contact form only','Instant estimate','Estimate + booking'],values:[1,2.3,3.8]}],Object.assign({x:0.6,y:2.0,w:7.5,h:4.5,barDir:'col',chartColors:[MINT],showValue:true,dataLabelPosition:'outEnd',dataLabelFormatCode:'0.0"x"',valAxisLabelFormatCode:'0"x"'},chartBase));
  stat(s,8.5,2.0,4.2,'391%','lift in conversion when a lead is answered inside one minute');
  stat(s,8.5,3.7,4.2,'24/7','AI assistant answers product and pricing questions while you sleep',TEAL);
  src(s,'PipelineOn, MyQuoteIQ, CallRail home services conversion studies 2026');
}
// 17 Agency comparison
{ const s=slide(0); title(s,'Versus a marketing agency','Same money, very different outcome.');
  const rows=[['','Lighting Partner Program','Typical agency (Scorpion, Blue Corona, Hook)'],['Monthly cost','0 upfront, 3 to 7% of gross','$2,000 to $10,000+ flat, win or lose'],['Knows permanent lighting','Yes, we make the product','No, you teach them'],['Time to launch','Weeks','4 to 8 months'],['Ownership on cancel','Every fee dollar credits toward owning it','Site disappears'],['Photo and video','Thousands of real installs included','You supply or they stock'],['Contract','3 year, county exclusive, buyout any time','12 month lock in, no exit value']];
  s.addTable(rows.map((r,i)=>r.map((c,j)=>({text:c,options:{bold:i===0||j===0,color:i===0?MUTED:(j===1?MINT:INK),fontSize:i===0?11:12,fontFace:F,fill:{color:i===0?'1A1F2E':'0E111B'},margin:[5,8,5,8]}}))),{x:0.6,y:2.0,w:12.1,colW:[2.6,4.5,5.0],border:{type:'solid',color:'2A2F44',pt:0.5}});
  src(s,'Agency pricing pages and Built With Dias, Local Service Mastery reviews 2026');
}
// 18 Franchise comparison
{ const s=slide(1); title(s,'Versus a franchise','You keep your name and the upside.');
  const rows=[['','Lighting Partner Program','Home service franchise','Trimlight dealer'],['Upfront','$0','$20K to $75K','Product only'],['Ongoing','7% down to 3%, credits to ownership','6 to 10% royalty forever','Materials markup'],['Your brand','Yes','No','No'],['Website and tools','Included and earned out','Templated, theirs','Not included'],['Territory','County exclusive','Assigned','Assigned']];
  s.addTable(rows.map((r,i)=>r.map((c,j)=>({text:c,options:{bold:i===0||j===0,color:i===0?MUTED:(j===1?MINT:INK),fontSize:i===0?11:12,fontFace:F,fill:{color:i===0?'1A1F2E':'0E111B'},margin:[5,8,5,8]}}))),{x:0.6,y:2.0,w:12.1,colW:[2.3,3.6,3.2,3.0],border:{type:'solid',color:'2A2F44',pt:0.5}});
  src(s,'FMS Franchise, Franchise Creator, CT Acquisitions 2026; Trimlight dealer program');
}
// 19 Territory / how it works
{ const s=slide(2); title(s,'How it works','From first call to launch in weeks, not months.');
  const steps=['Qualification call','Territory check and seat offer','Agreement signed, 3 year term','Site, tools, and ads built (2 to 4 weeks)','MOLA onboarding and first bids','Launch, weekly reports begin the following week'];
  steps.forEach((t,i)=>{ const x=0.6+(i%3)*4.15, y=2.0+Math.floor(i/3)*1.8; card(s,x,y,3.95,1.6); s.addText(String(i+1),{x:x+0.25,y:y+0.25,w:0.6,h:0.6,fontFace:F,fontSize:26,bold:true,color:PINK,isTextBox:true,margin:0}); s.addText(t,{x:x+0.95,y:y+0.15,w:2.85,h:1.3,fontFace:F,fontSize:13,color:INK,valign:'middle',isTextBox:true,margin:0}); });
}
// 20 Fine print
{ const s=slide(0); title(s,'The fine print','Plain language now, attorney language in the agreement.');
  bullets(s,['3 year term, county exclusive, your own brand name','Fee is on gross lighting revenue, reported monthly, verified against distributor purchases','Buyout any time: current ledger balance plus 3 months trailing fee, minus 100% of fees already paid','Add ons only at your written approval, added to the ledger at rate card on ship date','Routine maintenance and hosting never raise the ledger','On exit you keep domain, content license, ad accounts. Photo library stays licensed to you','Optional equity conversion clause available, not required','Cancel any time, the ledger math still applies'],0.6,2.0,12.1,4.6,13);
}
// 21 Recap
{ const s=slide(1); title(s,'What this is, and is not');
  const items=[['Not an agency','We know lighting because we make it. Nothing to teach us.'],['Not a franchise','Your name, your brand, your county. No royalty forever.'],['Not a one time build','Weekly reports, standing check ins, ongoing builds.'],['Not generic','Every tool, photo, and playbook is built for permanent lighting.']];
  items.forEach((it,i)=>{ const x=0.6+i*3.1; card(s,x,1.7,2.9,4.4); s.addText(it[0],{x:x+0.25,y:1.95,w:2.5,h:0.7,fontFace:F,fontSize:18,bold:true,color:PINK,isTextBox:true,margin:0}); s.addText(it[1],{x:x+0.25,y:2.75,w:2.45,h:3.2,fontFace:F,fontSize:13,color:INK,isTextBox:true,margin:0,valign:'top'}); });
}
// 22 CTA
{ const s=pres.addSlide(); s.background={path:'hero.jpg'}; n++;
  s.addImage({path:'logo.png',x:0.7,y:0.6,w:0.75,h:1.04});
  s.addText('Ten seats. One per county.',{x:0.7,y:2.3,w:11,h:1.0,fontFace:F,fontSize:38,bold:true,color:WHITE,isTextBox:true,margin:0});
  s.addText('Two partners onboarded a month. When your county is taken, it is taken.',{x:0.7,y:3.3,w:10,h:0.6,fontFace:F,fontSize:16,color:INK,isTextBox:true,margin:0});
  pill(s,0.7,4.3,3.4,'BOOK A QUALIFICATION CALL');
  pill(s,4.3,4.3,3.0,'BRIGHTERNIGHTS.COM',TEAL);
  s.addText('407-469-7093  ·  austen@brighternights.com',{x:0.7,y:5.2,w:10,h:0.4,fontFace:F,fontSize:13,color:MUTED,isTextBox:true,margin:0});
}
pres.writeFile({fileName:'Lighting_Partner_Program_Deck.pptx'}).then(()=>console.log('slides',n));
