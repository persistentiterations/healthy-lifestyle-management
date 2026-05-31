/* ============================================================
   Healthy Lifestyle Manual - Kinsman Health Center
   Digital recreation. Design system + page styles.
   ============================================================ */

:root{
  /* Brand purple family (sampled from Kinsman logo) */
  --purple:        #6b4fa0;
  --purple-deep:   #4a3578;
  --purple-mid:    #8a73b8;
  --lavender:      #cabce0;   /* logo fill        */
  --lavender-bar:  #b6a8d8;   /* table header bars */
  --lavender-soft: #d8cfec;
  --lavender-pale: #efebf7;
  --lavender-tint: #f6f3fb;

  --ink:        #20202a;
  --ink-soft:   #45454f;
  --paper:      #fdfdff;
  --paper-edge: #f3f2f7;
  --line:       #c7c6d2;   /* fill-in lines     */
  --hair:       #b9b8c4;

  /* Healthy-foods card colors (p.5) */
  --c-protein: #b9b1a7;
  --c-grain:   #e8c25e;
  --c-dairy:   #a6c0dd;
  --c-fats:    #c6bed3;
  --c-veg:     #a6c184;
  --c-fruit:   #f0cbc4;

  /* Typography */
  --f-type:  "Special Elite", "Courier New", monospace; /* typewriter headers   */
  --f-round: "Quicksand", "Segoe UI", sans-serif;        /* rounded body         */
  --f-sans:  "Poppins", "Helvetica Neue", Arial, sans-serif;/* clean sans         */
  --f-script:"Caveat", "Segoe Script", cursive;          /* handwritten accents  */
  --f-bubble:"Baloo 2", "Quicksand", sans-serif;         /* outlined bubble title */
  --f-label: "Helvetica Neue", Arial, sans-serif;        /* nutrition-facts label */

  --page-w: 816px;
  --page-h: 1056px;
}

*{ box-sizing:border-box; }

html,body{ margin:0; height:100%; }
body{
  background:#1a1820;
  font-family:var(--f-round);
  color:var(--ink);
  overflow:hidden;
}

/* ---------- Stage / scaling ---------- */
#stage{
  position:fixed; inset:0;
  display:flex; align-items:center; justify-content:center;
  overflow:hidden;
}
#book{
  width:var(--page-w); height:var(--page-h);
  transform-origin:center center;
  position:relative;
}

/* ---------- Page ---------- */
.page{
  position:absolute; inset:0;
  width:var(--page-w); height:var(--page-h);
  background:var(--paper);
  padding:52px 58px 38px;
  box-shadow:0 30px 80px rgba(0,0,0,.5);
  overflow:hidden;
  display:none !important;
}
.page.is-active{ display:block !important; }
/* faint binding shadow at the spine (left edge) */
.page::before{
  content:""; position:absolute; top:0; bottom:0; left:0; width:34px;
  background:linear-gradient(90deg, rgba(74,53,120,.10), rgba(74,53,120,0));
  pointer-events:none;
}

.pageno{
  position:absolute; bottom:20px; left:34px;
  font-family:var(--f-sans); font-size:13px; color:#9a99a6; letter-spacing:.04em;
}
.pageno.right{ left:auto; right:34px; }

/* logo lockup (top-right badge) */
.kh-badge{
  position:absolute; top:34px; right:46px; width:118px; height:auto;
}

/* ---------- Shared type helpers ---------- */
.h-type{ font-family:var(--f-type); color:var(--ink); letter-spacing:.02em; }
.h-sans{ font-family:var(--f-sans); }
.script{ font-family:var(--f-script); }
.center{ text-align:center; }

.title-type{
  font-family:var(--f-type);
  font-size:40px; letter-spacing:.06em; text-align:center; margin:0 0 6px;
  color:var(--ink);
}
.title-serif{
  font-family:var(--f-type);
  font-size:58px; letter-spacing:.08em; text-align:center; color:var(--purple-deep);
  margin:0 0 4px;
}
.subtitle-type{
  font-family:var(--f-type); font-size:15px; letter-spacing:.08em;
  text-align:center; color:var(--ink-soft); margin:0 0 18px;
}

p.body{ font-size:16.5px; line-height:1.5; color:var(--ink); margin:0 0 12px; text-wrap:pretty; }
.round{ font-family:var(--f-round); }

/* ---------- Fill-in lines & boxes ---------- */
.fill-line{ border-bottom:1.5px solid var(--line); height:30px; }
.box-soft{ background:var(--lavender-pale); border-radius:14px; }

/* ============================================================
   COVER
   ============================================================ */
.cover{
  padding:70px 64px;
  background:linear-gradient(145deg, var(--purple-deep) 0%, var(--purple) 55%, var(--purple-mid) 100%);
  color:var(--paper);
}
.cover .small-top{ font-family:var(--f-type); font-size:30px; letter-spacing:.04em; margin:0 0 4px; }
.bubble{
  font-family:var(--f-bubble); font-weight:800; line-height:.9;
  color: var(--paper); -webkit-text-stroke:3px var(--lavender);
  text-stroke:3px var(--lavender);
}
.cover .styleword{
  -webkit-text-stroke-color:var(--lavender);
}
.cover .lifeword{ font-size:150px; letter-spacing:2px; margin:0; }
.cover .styleword{
  font-size:74px; -webkit-text-stroke:2.6px var(--ink);
  position:absolute; right:48px; top:300px; transform:rotate(90deg);
  transform-origin:right top;
}
.cover .mgmt{ font-family:var(--f-type); font-size:34px; letter-spacing:.05em; margin:18px 0 4px; }
.cover .author{ font-family:var(--f-sans); font-size:21px; color:var(--paper); margin:0; }
.cover .tagline{
  font-family:var(--f-type); font-size:21px; line-height:1.7; letter-spacing:.04em;
  color:rgba(255,255,255,.85); margin-top:120px; max-width:560px;
}
.cover .copyr{ position:absolute; font-size:11px; color:rgba(255,255,255,.5); font-family:var(--f-sans); }

/* ============================================================
   DEDICATION
   ============================================================ */
.dedication{ display:flex; flex-direction:column; }
.dedication h2{ font-family:var(--f-sans); font-weight:500; letter-spacing:.18em; font-size:20px; text-align:center; margin:170px 0 40px; }
.dedication .ded-body{ font-family:var(--f-sans); font-weight:600; font-size:21px; line-height:1.55; max-width:430px; margin:0 auto; }
.dedication .ded-body p{ margin:0 0 22px; }
.signs{ position:relative; margin-top:80px; height:230px; }
.sign{ position:absolute; color:#111; }
.sign-1{ font-family:var(--f-script); font-size:40px; transform:rotate(-6deg); left:40px; top:10px; }
.sign-2{ font-family:var(--f-script); font-size:38px; color:#b3187f; transform:rotate(-12deg); right:20px; top:40px; line-height:1.2; text-align:left; }

/* ============================================================
   LETTER + TABLE OF CONTENTS
   ============================================================ */
.letter h2{ font-family:var(--f-round); font-weight:700; font-size:20px; margin:0 0 14px; }
.letter p.body{ font-size:14.5px; line-height:1.46; margin-bottom:10px; }
.dot-rule{ text-align:center; color:var(--purple-deep); letter-spacing:.5em; font-size:18px; margin:20px 0 12px; }
.toc h3{ font-family:var(--f-type); font-size:21px; letter-spacing:.03em; margin:0 0 12px; }
.toc ul{ list-style:none; margin:0; padding:0; }
.toc li{
  font-family:var(--f-type); font-size:15px; display:flex; align-items:baseline; gap:8px; margin:0 0 9px;
}
.toc li .leader{ flex:1; border-bottom:2px dotted #2c2c34; transform:translateY(-4px); }
.toc li .pg{ font-variant-numeric:tabular-nums; }

/* ============================================================
   SMALL HEALTHY HABITS (4-quadrant)
   ============================================================ */
.habits{ padding:0; }
.habits-header{
  background:linear-gradient(100deg,var(--purple) 0%, var(--lavender) 55%, var(--purple-mid) 100%);
  height:110px; position:relative; display:flex; align-items:center; justify-content:center;
  border-bottom-left-radius:60% 40px; border-bottom-right-radius:60% 40px;
}
.habits-header img{ width:150px; background:var(--lavender-pale); border-radius:50%; padding:6px 10px; }
.habits-intro{ text-align:center; font-style:italic; font-size:15.5px; line-height:1.4; margin:16px 50px 8px; color:var(--ink); }
.quad{ position:relative; margin:6px 30px 0; height:760px; }
.quad-grid{ position:absolute; inset:0; display:grid; grid-template-columns:1fr 1fr; grid-template-rows:1fr 1fr; }
.quad-cell{ padding:14px 16px; position:relative; }
.quad .vline{ position:absolute; left:50%; top:4%; bottom:4%; width:2px; background:var(--purple-mid); }
.quad .hline{ position:absolute; top:50%; left:3%; right:3%; height:2px; background:var(--purple-mid); }
.quad-ellipse{ position:absolute; left:14%; right:14%; top:8%; bottom:8%; background:var(--lavender-tint); border-radius:50%; z-index:0; }
.quad-goal{ position:relative; z-index:1; font-size:17px; line-height:1.32; color:var(--ink); }
.quad-goal.big{ font-size:21px; text-align:center; }
.quad-note{ position:relative; z-index:1; font-size:12.5px; line-height:1.32; color:var(--ink-soft); margin-top:8px; }
.steps-chip{
  background:var(--purple); color:#fff; border-radius:16px; padding:10px 12px;
  font-size:11.5px; line-height:1.3; position:absolute; z-index:2; max-width:175px;
}
.steps-chip b{ font-weight:700; }
.doodle{ font-family:var(--f-script); font-weight:700; color:var(--purple-deep); font-size:34px; position:absolute; z-index:1; }

/* ============================================================
   NUTRITION GUIDE
   ============================================================ */
.ng h3{ font-family:var(--f-round); font-weight:700; text-decoration:underline; font-size:16px; margin:14px 0 2px; }
.ng .goal-line{ font-size:14.5px; line-height:1.4; margin:0 0 2px; }
.ng .realfood{
  width:230px; height:215px; float:right; margin:0 0 8px 16px;
  background:var(--lavender-pale); border:1px dashed var(--purple-mid); border-radius:8px;
  display:flex; align-items:center; justify-content:center; text-align:center;
  font-family:var(--f-type); font-size:12px; color:var(--purple-deep); padding:14px;
}
.ng ul.tips{ margin:8px 0; padding-left:20px; font-size:13.5px; line-height:1.4; }
.ng ul.tips li{ margin-bottom:6px; }
.swaps{ margin-top:14px; }
.swap-row{ display:flex; align-items:center; gap:10px; font-family:var(--f-type); font-size:14px; margin:0 0 9px; }
.swap-row .arrow{ color:var(--purple); letter-spacing:-2px; font-weight:700; }
.swap-row .from{ min-width:230px; }
.dining-tip{ font-family:var(--f-round); font-size:14px; line-height:1.45; text-align:center; }

/* ============================================================
   HEALTHY FOODS
   ============================================================ */
.hf-grid{ display:grid; grid-template-columns:1fr 1fr; gap:22px 26px; margin-top:8px; }
.hf-card{ position:relative; padding:20px 22px 24px; color:var(--ink);
  -webkit-mask:
    radial-gradient(circle at 50% 0,    #0000 8px, #000 8.5px) top    /16px 8px  repeat-x,
    radial-gradient(circle at 50% 100%, #0000 8px, #000 8.5px) bottom /16px 8px  repeat-x,
    radial-gradient(circle at 0    50%, #0000 8px, #000 8.5px) left   /8px  16px repeat-y,
    radial-gradient(circle at 100% 50%, #0000 8px, #000 8.5px) right  /8px  16px repeat-y,
    linear-gradient(#000 0 0) 8px 8px/calc(100% - 16px) calc(100% - 16px) no-repeat;
  mask:
    radial-gradient(circle at 50% 0,    #0000 8px, #000 8.5px) top    /16px 8px  repeat-x,
    radial-gradient(circle at 50% 100%, #0000 8px, #000 8.5px) bottom /16px 8px  repeat-x,
    radial-gradient(circle at 0    50%, #0000 8px, #000 8.5px) left   /8px  16px repeat-y,
    radial-gradient(circle at 100% 50%, #0000 8px, #000 8.5px) right  /8px  16px repeat-y,
    linear-gradient(#000 0 0) 8px 8px/calc(100% - 16px) calc(100% - 16px) no-repeat;
}
.hf-card h3{ font-family:var(--f-round); font-weight:700; font-style:italic; text-align:center; font-size:19px; margin:0 0 4px; }
.hf-card .dash{ border-top:2px dashed rgba(255,255,255,.7); margin:0 0 10px; }
.hf-card ul{ margin:0; padding-left:16px; font-size:14px; line-height:1.5; }
.hf-card.two ul{ columns:2; }
.hf-note{ font-size:14px; line-height:1.4; margin-top:14px; }
.c-protein{ background:var(--c-protein); }
.c-grain{ background:var(--c-grain); }
.c-dairy{ background:var(--c-dairy); }
.c-fats{ background:var(--c-fats); }
.c-veg{ background:var(--c-veg); }
.c-fruit{ background:var(--c-fruit); }

/* ============================================================
   GROCERY GUIDE
   ============================================================ */
.gg p.body{ font-size:15px; }
.gg .two-col{ display:grid; grid-template-columns:1fr 1fr; gap:22px; margin:10px 0; }
.gg .callout{
  background:var(--lavender-soft); border:2px solid var(--purple-mid); border-radius:14px;
  padding:16px 18px; font-family:var(--f-type); font-size:12.5px; line-height:1.5;
  transform:rotate(-1.2deg);
}
.gg h3{ font-family:var(--f-type); font-size:26px; letter-spacing:.03em; margin:14px 0 10px; }
.tips-cols{ display:grid; grid-template-columns:1fr 1fr; gap:6px 28px; font-size:15px; line-height:1.35; }
.tips-cols div{ margin-bottom:14px; }

/* ============================================================
   NUTRITION LABEL PAGE
   ============================================================ */
.nl-wrap{ display:flex; gap:18px; align-items:flex-start; }
.annot{ font-family:var(--f-sans); font-weight:600; font-size:13px; color:var(--purple-deep); line-height:1.35; }
.annot .num{ display:inline-flex; width:22px; height:22px; border:2px solid var(--purple); border-radius:50%;
  align-items:center; justify-content:center; font-size:12px; margin-right:6px; color:var(--purple-deep); }
.remember{ color:#3a6ea5; font-family:var(--f-round); font-weight:600; font-size:13.5px; text-align:center; margin:14px 0; line-height:1.45; }
.warn h4{ font-family:var(--f-type); font-size:15px; margin:0 0 8px; }
.warn ul{ font-family:var(--f-type); font-size:13px; line-height:1.4; padding-left:18px; margin:0 0 10px; }
.warn .always{ font-family:var(--f-type); font-size:15px; text-align:center; letter-spacing:.04em; }
.tri{ width:0;height:0;border-left:16px solid transparent;border-right:16px solid transparent;border-bottom:28px solid var(--c-grain); position:relative; }

/* Nutrition Facts label (FDA standard format) */
.nfacts{ border:2px solid #000; padding:5px 7px; width:230px; font-family:var(--f-label); color:#000; background:#fff; }
.nfacts .nf-title{ font-weight:800; font-size:26px; line-height:.95; letter-spacing:-.5px; border-bottom:1px solid #000; }
.nfacts .row{ display:flex; justify-content:space-between; font-size:11px; border-bottom:1px solid #000; padding:1px 0; }
.nfacts .row.thin{ border-bottom-width:.5px; }
.nfacts .sep-thick{ height:9px; background:#000; margin:1px -7px; }
.nfacts .sep-med{ height:4px; background:#000; margin:1px -7px; }
.nfacts .cal{ display:flex; justify-content:space-between; align-items:flex-end; font-weight:800; }
.nfacts .cal .lab{ font-size:15px; } .nfacts .cal .val{ font-size:30px; line-height:.9; }
.nfacts .ind{ padding-left:12px; } .nfacts .ind2{ padding-left:22px; }
.nfacts .b{ font-weight:800; }
.nfacts .dv{ text-align:right; font-weight:800; font-size:9px; }
.nfacts .foot{ font-size:8px; line-height:1.15; padding-top:3px; }
.nfacts .serv{ font-size:10px; }
.nfacts .serv b{ font-size:12px; }

/* ============================================================
   GOAL ASSESSMENT
   ============================================================ */
.goal-bubble{ font-family:var(--f-bubble); font-weight:800; font-size:54px; color:transparent;
  -webkit-text-stroke:2.5px var(--ink); display:inline-block; vertical-align:middle; }
.goal-head{ display:flex; align-items:center; gap:6px; }
.goal-head .ass{ font-family:var(--f-type); font-size:26px; letter-spacing:.04em; }
.ga-row{ display:flex; gap:18px; margin:8px 0; }
.scale-ico{ width:96px; text-align:center; }
.scale-ico .sq{ width:78px; height:70px; border:3px solid var(--ink); border-radius:12px; margin:0 auto 4px; position:relative; }
.scale-ico .sq::after{ content:""; position:absolute; left:18px; right:18px; top:14px; height:18px; border:2px solid var(--ink); border-radius:6px 6px 0 0; }
.scale-ico span{ font-family:var(--f-type); font-size:13px; }
.motivation{ background:var(--lavender-pale); border-radius:14px; padding:12px 16px; }
.motivation .lab{ font-family:var(--f-type); font-size:13px; letter-spacing:.1em; text-align:center; color:var(--ink-soft); margin-bottom:8px; }
.action-steps{ flex:1; background:var(--lavender-pale); border-radius:14px; padding:14px 18px; }
.action-steps .lab{ font-family:var(--f-type); font-size:18px; letter-spacing:.18em; text-align:center; color:var(--ink-soft); margin-bottom:10px; }
.chk-row{ display:flex; align-items:center; gap:12px; margin-bottom:14px; }
.chk{ width:24px; height:24px; border:2.5px solid var(--ink); border-radius:5px; flex:none; }
.chk-row .ln{ flex:1; border-bottom:1.5px solid var(--hair); height:22px; }
.cal-needs{ text-align:center; font-family:var(--f-round); }
.cal-needs h3{ font-size:23px; margin:6px 0 0; font-weight:600; }
.cal-needs .warn-min{ font-size:14.5px; margin:2px 0 8px; }
.cal-cols{ display:grid; grid-template-columns:1fr 1fr; gap:8px 28px; text-align:left; font-size:14px; line-height:1.4; }
.cal-cols h4{ font-size:15px; margin:0 0 10px; font-weight:700; }
.cal-blanks{ display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-top:10px; font-family:var(--f-round); font-size:16px; }
.cal-blanks .b-line{ display:inline-block; border-bottom:1.5px solid var(--ink); min-width:90px; }

/* ============================================================
   STAY ACTIVE calendar
   ============================================================ */
.sa-top{ display:flex; align-items:flex-start; justify-content:space-between; }
.sa-month{ font-family:var(--f-sans); font-size:15px; letter-spacing:.12em; }
.sa-month .mline{ display:block; border-bottom:1.5px solid var(--ink); width:150px; height:26px; }
.sa-title{ font-family:var(--f-sans); font-weight:700; font-size:44px; letter-spacing:.02em; }
.sa-grid{ display:grid; grid-template-columns:84px repeat(4,1fr); grid-auto-rows:1fr; gap:0; margin-top:16px; height:700px;
  border:1.5px solid var(--ink); }
.sa-grid .cell{ border:1px solid var(--ink); display:flex; align-items:center; justify-content:center;
  font-family:var(--f-sans); font-size:14px; letter-spacing:.05em; }
.sa-grid .colhead{ font-weight:600; }
.sa-grid .dayhead{ font-weight:600; }
.sa-quote{ font-family:var(--f-type); font-size:15px; letter-spacing:.04em; text-align:center; margin-top:14px; line-height:1.6; }

/* ============================================================
   MEAL DIARY
   ============================================================ */
.md-table{ width:100%; border-collapse:collapse; margin-top:14px; height:830px; }
.md-table th{ font-family:var(--f-type); font-size:13px; letter-spacing:.12em; background:linear-gradient(180deg,var(--lavender-bar),var(--lavender-soft));
  border:1px solid var(--ink); padding:6px; font-weight:400; }
.md-table td{ border:1px solid var(--ink); vertical-align:top; padding:4px; position:relative; }
.md-table .daycol{ width:30px; font-family:var(--f-type); font-size:12px; letter-spacing:.1em; text-align:center; }
.md-table .daycol span{ writing-mode:vertical-rl; transform:rotate(180deg); margin:0 auto; }
.water{ position:absolute; bottom:6px; right:6px; }
.water .wlab{ font-family:var(--f-type); font-size:10px; letter-spacing:.08em; display:inline-block; vertical-align:middle; margin-right:4px; }
.cups{ display:inline-grid; grid-template-columns:repeat(4,12px); gap:3px; vertical-align:middle; }
.cup{ width:11px; height:13px; border:1px solid var(--ink); border-radius:0 0 3px 3px; clip-path:polygon(8% 0,92% 0,82% 100%,18% 100%); }
.md-quote{ font-family:var(--f-round); font-style:italic; font-size:14px; text-align:center; margin-top:8px; line-height:1.4; }

/* ============================================================
   FOOD REFERENCE
   ============================================================ */
.fr-table{ width:100%; border-collapse:collapse; margin-top:18px; }
.fr-table th{ font-family:var(--f-type); font-size:14px; letter-spacing:.06em; font-weight:400; color:var(--ink-soft);
  background:linear-gradient(180deg,var(--lavender-bar),var(--lavender-soft)); border:1px solid var(--hair); padding:10px 6px; }
.fr-table td{ border:1px solid var(--hair); height:33px; }
.fr-table .citem{ width:42%; }

/* ============================================================
   POUND LOST TRACKER
   ============================================================ */
.pt-heads{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; margin-top:8px; }
.pt-heads .ph{ background:var(--lavender-bar); border-radius:4px; padding:8px 12px; font-family:var(--f-sans); font-weight:600; font-size:13px; letter-spacing:.06em; color:var(--purple-deep); }
.pt-frame{ border:2px solid var(--lavender-soft); border-radius:16px; margin-top:18px; padding:26px 20px; }
.pt-grid{ display:grid; grid-template-columns:repeat(7,1fr); gap:14px 8px; }
.pt-circle{ aspect-ratio:1; border-radius:50%; background:var(--lavender-bar); display:flex; align-items:center; justify-content:center; }
.pt-inner{ width:58%; height:58%; border-radius:50%; background:var(--lavender-pale); display:flex; align-items:center; justify-content:center;
  font-family:var(--f-sans); font-weight:700; font-size:17px; color:var(--purple-deep); }

/* ============================================================
   GROCERY LIST
   ============================================================ */
.gl-title{ font-family:var(--f-type); font-size:50px; letter-spacing:.04em; text-align:center; margin:0 0 14px; }
.gl-tipsbar{ display:flex; gap:0; border-radius:12px; overflow:hidden; margin-bottom:18px; }
.gl-tipsbar .tab{ background:var(--purple-mid); color:#fff; font-family:var(--f-type); font-size:12px; letter-spacing:.1em;
  writing-mode:vertical-rl; transform:rotate(180deg); padding:12px 8px; display:flex; align-items:center; justify-content:center; text-align:center; }
.gl-tipsbar .tips{ background:var(--lavender-bar); flex:1; padding:12px 18px; font-family:var(--f-type); font-size:14px; line-height:1.7; letter-spacing:.04em; }
.gl-grid{ display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; }
.gl-panel{ border:1.5px solid var(--ink); border-radius:10px; overflow:hidden; }
.gl-panel h4{ margin:0; background:var(--lavender-bar); color:var(--purple-deep); font-family:var(--f-type); font-weight:400;
  font-size:13px; letter-spacing:.08em; text-align:center; padding:6px; }
.gl-panel .lines{ padding:4px 8px; }
.gl-panel .lines .l{ border-bottom:1px solid var(--hair); height:21px; }

/* ============================================================
   NOTES
   ============================================================ */
.notes-title{ font-family:var(--f-sans); font-weight:500; letter-spacing:.18em; font-size:18px; text-align:center; margin:0; }
.notes-lines{ margin-top:30px; }
.notes-lines .l{ border-bottom:1.5px solid var(--line); height:38px; }

/* ============================================================
   NAV CHROME (outside scaled book)
   ============================================================ */
#nav{ position:fixed; left:0; right:0; bottom:0; height:54px; display:flex; align-items:center; justify-content:center; gap:18px;
  background:rgba(20,18,26,.82); backdrop-filter:blur(8px); z-index:50; color:#e7e3f0; font-family:var(--f-sans); }
#nav button{ background:#3a2f57; color:#fff; border:none; border-radius:8px; width:38px; height:34px; font-size:18px; cursor:pointer; }
#nav button:hover{ background:var(--purple); }
#nav button:disabled{ opacity:.3; cursor:default; }
#nav .counter{ font-size:14px; min-width:96px; text-align:center; }
#nav select{ background:#2a2338; color:#fff; border:1px solid #4a3f63; border-radius:8px; padding:6px 10px; font-family:var(--f-sans); font-size:13px; max-width:230px; }
.nav-arrow{ position:fixed; top:50%; transform:translateY(-50%); z-index:49; width:46px; height:70px; border:none;
  background:rgba(58,47,87,.55); color:#fff; font-size:26px; cursor:pointer; border-radius:8px; }
.nav-arrow:hover{ background:var(--purple); }
.nav-arrow.left{ left:14px; } .nav-arrow.right{ right:14px; }
.nav-arrow:disabled{ opacity:.25; cursor:default; }
@media print{ #nav,.nav-arrow{ display:none; } }
