========================================================
FIGMA MAKE PROMPT — SPLITES WEBSITE
Full landing page · Direction A · Clean Fintech
Awwards-level execution
========================================================

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSPIRATION REFERENCE IMAGES (attached)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two reference images are attached. Study them carefully before designing.

Image 1 (Payline): Take inspiration from —
- The floating UI card composition in the hero (cards at different z-depths, slight rotation, overlapping)
- The clean white page with a dark navbar strip
- The way real product UI is used as the hero graphic instead of illustrations
- Mini floating chips ("+$347.23", "Share spendings") scattered around the main dashboard mockup
- The confidence of the large centered serif headline above the product visual
Do NOT copy the dark navbar or the acid-green color — those belong to Payline's brand.

Image 2 (Pipe): Take inspiration from —
- The editorial whitespace between sections
- The alternating feature layout (text left / product right, then flip)
- The way product UI screenshots do all the heavy lifting — no decorative illustrations
- The minimal section labels above headlines ("Trusted by industry leaders" as an eyebrow)
- The dense stats bar that anchors the scroll rhythm
Do NOT copy the dark background or the capital markets content.

The Splites design must combine Payline's hero composition energy with Pipe's editorial scroll rhythm, on a clean off-white (#FAFAF8) base with sage green (#2E7D5E) as the single accent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM — USE THESE EXACTLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COLORS:
  Page base:        #FAFAF8  (off-white, not pure white)
  Surface/section:  #F3F2EE  (slightly darker for alternating sections)
  Card background:  #FFFFFF
  Ink (headings):   #1A1A1A
  Body text:        #555555
  Muted text:       #888888
  Hint/tertiary:    #AAAAAA
  Border:           #E5E3DC
  Accent green:     #2E7D5E  (CTAs, highlights, positive states)
  Green bg tint:    #E8F5EF  (for green badges and chips)
  Green text dark:  #1A5C42  (text on green bg tint)
  Red tint bg:      #FEF0EF
  Red text:         #C0392B  (negative balances)
  Amber tint bg:    #FDF3E3
  Amber text:       #92600A  (pending states)
  Dark CTA section: #1A1A1A  (final CTA + footer background)

TYPOGRAPHY:
  Display font:   DM Serif Display — use ONLY for H1 hero, section H2s, and final CTA headline. Never for UI labels, nav, or body. Use italic variant only on the em word in the hero headline.
  Body font:      Inter — everything else: nav, body copy, labels, buttons, cards, footer
  Weights used:   Inter 400 (body), Inter 500 (labels, nav), Inter 600 (card values, button text)
  Font scale:
    Hero H1:        48px DM Serif Display, letter-spacing -1.5px, line-height 1.1
    Section H2:     36px DM Serif Display, letter-spacing -1px, line-height 1.2
    Final CTA H2:   42px DM Serif Display, letter-spacing -1px
    Feature H3:     24px Inter 600, letter-spacing -0.5px
    Body large:     16px Inter 400, line-height 1.75
    Body default:   14px Inter 400, line-height 1.65
    Labels/caps:    12px Inter 600, letter-spacing 0.08em, uppercase
    Card amounts:   30px Inter 600, tabular nums
    Stat numbers:   32px DM Serif Display

SPACING RHYTHM:
  Section padding: 80px top/bottom, 32px sides (max-width 1100px centered)
  Card padding:    20px
  Card gap:        16px in grids
  Component gap:   12–16px
  Between sections that change background: 0px gap (the background itself is the divider)

BORDERS & RADIUS:
  Cards:           border-radius 12px, border 0.5px solid #E5E3DC
  Buttons:         border-radius 8px
  Pills/badges:    border-radius 20px
  Inner UI items:  border-radius 6–8px
  NEVER use drop shadows — use borders only. 0.5px borders throughout.

ICONS — USE LUCIDE REACT (NOT HEROICONS, NOT FONTAWESOME):
  Import all icons from lucide-react. Do not use placeholder squares or emoji as icons.
  Use these specific icons:
    Lock icon:          lucide-react → Lock
    Shield icon:        lucide-react → ShieldCheck
    Gift/free icon:     lucide-react → Gift
    Arrow right:        lucide-react → ArrowRight
    Check mark:         lucide-react → Check
    Bell notification:  lucide-react → Bell
    Users/group:        lucide-react → Users
    Receipt/expense:    lucide-react → Receipt
    Trending up:        lucide-react → TrendingUp
    Send/nudge:         lucide-react → Send
    Star (rating):      lucide-react → Star (fill with #F59E0B)
    Home (flat):        lucide-react → Home
    Plane (trip):       lucide-react → Plane
    Utensils (dinner):  lucide-react → Utensils
    Apple store:        lucide-react → Apple (or use SVG wordmark)
    Play store:         use the triangle play icon from lucide-react → Play
  All icons: stroke-width 1.5, sized 16px inline / 20px decorative / 24px feature icons
  Icon color: inherit from parent or use #2E7D5E for accent icons

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT NOT TO DO — READ THIS CAREFULLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DO NOT use:
  ✗ Drop shadows or box-shadows anywhere (not even on cards)
  ✗ Gradients on backgrounds or hero sections
  ✗ Dark navbar (nav stays #FAFAF8, same as page)
  ✗ Pure white (#FFFFFF) as the page background — use #FAFAF8
  ✗ Any color other than #2E7D5E as the accent — no blues, no purples
  ✗ Emoji as icons — use lucide-react icons only
  ✗ Empty grey placeholder boxes where product UI should be
  ✗ Generic stock illustration figures or blob shapes
  ✗ Rounded corners larger than 12px on cards (no 24px border-radius "bubbly" cards)
  ✗ Bold font weight heavier than Inter 600
  ✗ All-caps text anywhere except the small section eyebrow labels
  ✗ Multiple accent colors — sage green is the only color, used sparingly
  ✗ Bullet point lists anywhere on the page
  ✗ Section titles that are questions ("Are you tired of...")
  ✗ Numbered step circles larger than 32px
  ✗ Hero that is purely typographic — it must have the floating product card composition
  ✗ Footer with just "© 2025 Splites" — build the full 4-column footer

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 01 — NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #FAFAF8
Height: 60px
Border-bottom: 0.5px solid #E5E3DC
Sticky on scroll: yes
Max-width inner: 1100px, centered

LEFT: Logo wordmark "splites" — "split" in #1A1A1A, "es" in #2E7D5E. Font: DM Serif Display, 22px. No icon logo.

CENTER: Nav links — "How it works" · "Features" · "Pricing" · "Download"
Font: Inter 500, 14px, color #555555
Spacing between links: 32px
Hover state: color #1A1A1A

RIGHT: Single CTA button — label "Get the app"
Style: background #1A1A1A, color #FFFFFF, border-radius 8px, padding 10px 22px, Inter 500 14px
No outline/ghost button in nav.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 02 — HERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #FAFAF8
Layout: Two-column flex. Left column: text. Right column: floating product card composition.
Padding: 80px top, 64px bottom, 32px sides
Max-width: 1100px centered

— LEFT COLUMN (flex: 1) —

Eyebrow pill (top):
  Background: #E8F5EF, color: #1A5C42
  Font: Inter 600, 12px
  Content: green dot (6px circle #2E7D5E) + "Free on iOS & Android"
  Border-radius: 20px, padding: 6px 14px
  Margin-bottom: 24px

H1 headline:
  "Split bills." on line 1
  "Not friendships." on line 2 — "friendships" should be in italic DM Serif Display, color #2E7D5E
  Font: DM Serif Display, 48px, letter-spacing -1.5px, color #1A1A1A
  Margin-bottom: 20px

Sub-headline:
  "Add an expense, choose who's in, and Splites handles the rest. No spreadsheets, no awkward reminders — just everyone settled up."
  Font: Inter 400, 16px, color #555555, line-height 1.75, max-width 400px
  Margin-bottom: 32px

Button row:
  Primary: "Download free" — bg #1A1A1A, color #fff, padding 14px 28px, radius 8px, Inter 600 14px
  Ghost: "See how it works" — bg transparent, color #1A1A1A, border 0.5px solid #E5E3DC, same padding/radius
  Gap between buttons: 12px

Social proof row (below buttons, margin-top 40px):
  4 overlapping avatar circles (28px diameter, 2px white border, overlap -8px each)
  Colors: #2E7D5E "AK", #1565C0 "SR", #6A1B9A "MN", #BF360C "JL"
  Text: Inter 400, 13px, color #888888
  Text content: "Trusted by " + bold "14,000+" in #1A1A1A + " friend groups"

— RIGHT COLUMN (width: 300px, position: relative) —

THIS IS THE HERO'S AWWARDS-LEVEL MOMENT. Build a floating card composition like the Payline reference image — not a flat screenshot, but 3 layered cards at slightly different positions and subtle rotations creating depth.

MAIN CARD (front, centered, no rotation):
  Width: 280px
  Background: #FFFFFF, border: 0.5px solid #E5E3DC, border-radius: 12px, padding: 20px
  
  Header row:
    Left: "Bali trip · 6 people" — Inter 400, 12px, #888888
    Right: Badge "2 pending" — bg #FDF3E3, color #92600A, radius 20px, padding 3px 10px, Inter 500 11px
  
  Amount: "£ 3,840.00" — Inter 600, 30px, #1A1A1A, letter-spacing -1px, margin-bottom 18px
  
  3 expense rows (each: flex, gap 10px, padding 7px 0, border-bottom 0.5px #F3F2EE):
    Row 1: Avatar circle (28px, bg #2E7D5E, "AK") + "Adnan" (Inter 400, 13px) + "+£ 620.00" (Inter 600, 13px, #2E7D5E)
    Row 2: Avatar circle (28px, bg #1565C0, "SR") + "Sara" + "−£ 210.00" (color #C0392B)
    Row 3: Avatar circle (28px, bg #6A1B9A, "MN") + "Malik" + "−£ 140.00" (color #C0392B)
  
  Footer row (margin-top 14px, border-top 0.5px #F3F2EE):
    Left: "8 expenses · 4 settled" — Inter 400, 12px, #888888
    Right: "Settle up →" badge — bg #E8F5EF, color #1A5C42, radius 20px, padding 3px 10px, Inter 500 11px

FLOATING MINI CARD — top left of composition, rotated -6deg, overlapping main card:
  Width: 160px, bg #FFFFFF, border 0.5px #E5E3DC, radius 10px, padding 12px
  Content: 
    lucide-react CreditCard icon (16px, #2E7D5E) on left
    "You're owed" in Inter 400, 11px, #888888
    "£ 1,240.00" in Inter 600, 14px, #1A1A1A

FLOATING CHIP — top right of composition, rotated +4deg:
  Small pill: bg #E8F5EF, border 0.5px #2E7D5E
  Content: lucide-react TrendingUp icon (14px, #2E7D5E) + "+£ 620.00" Inter 600, 13px, #2E7D5E
  Border-radius: 20px, padding: 6px 14px

FLOATING NOTIFICATION CHIP — bottom left, rotated -3deg:
  Small card: bg #FFFFFF, border 0.5px #E5E3DC, radius 8px, padding 8px 12px
  Content: lucide-react Bell icon (14px, #888888) + "Sara settled up" Inter 400, 12px, #555555
  Check circle on right: 16px circle bg #E8F5EF, lucide-react Check icon 10px #2E7D5E inside

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 03 — STATS BAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #F3F2EE
Border-top: 0.5px solid #E5E3DC
Border-bottom: 0.5px solid #E5E3DC
No max-width — full bleed

3-column grid, equal width, each cell:
  Border-right: 0.5px solid #E5E3DC (last cell no border)
  Padding: 28px 48px

Cell 1:
  Number: "£ 18M" — DM Serif Display, 32px, #1A1A1A, letter-spacing -1px
  Label: "settled between friends" — Inter 400, 13px, #888888, margin-top 4px

Cell 2:
  Number: "2.4M" — DM Serif Display, 32px, #1A1A1A
  Label: "expenses tracked"

Cell 3:
  Number: "4.9 ★" — DM Serif Display, 32px, #1A1A1A — the star uses lucide-react Star filled with #F59E0B
  Label: "average App Store rating"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 04 — PROBLEM SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #FAFAF8
Padding: 80px 32px
Max-width: 900px, centered, text-align center

Section eyebrow: "SOUND FAMILIAR?" — Inter 600, 12px, #888888, letter-spacing 0.08em, uppercase, margin-bottom 16px

H2: "Splitting bills is surprisingly hard"
Font: DM Serif Display, 36px, #1A1A1A, letter-spacing -1px, margin-bottom 16px

Sub-copy: "You paid for the Airbnb. Someone else covered flights. A third person said 'I'll get you back' four months ago. It adds up — in money and in tension."
Font: Inter 400, 16px, #555555, line-height 1.75, max-width 520px, margin 0 auto 48px

3-CARD GRID (below the text, full width of section, gap 16px):
Each card: bg #FFFFFF, border 0.5px #E5E3DC, radius 12px, padding 24px, text-align left

Card 1 — "The group chat math":
  Icon: lucide-react MessageSquare, 20px, #2E7D5E, inside a 40px circle bg #E8F5EF, margin-bottom 16px
  Title: "The group chat math" — Inter 600, 15px, #1A1A1A, margin-bottom 8px
  Body: "Scrolling back through 300 messages trying to figure out who paid for the airport taxi. Nobody remembers. Everyone guesses."
  Font: Inter 400, 13px, #555555, line-height 1.65

Card 2 — "The awkward reminder":
  Icon: lucide-react AlertCircle, 20px, #92600A, inside a 40px circle bg #FDF3E3
  Title: "The awkward reminder"
  Body: "Asking a friend for £40 they owe you should be simple. Instead you've drafted the message six times and still haven't sent it."

Card 3 — "The spreadsheet nobody uses":
  Icon: lucide-react Table, 20px, #C0392B, inside a 40px circle bg #FEF0EF
  Title: "The spreadsheet nobody uses"
  Body: "Someone makes a sheet on day one. It gets updated twice. By the end of the trip it's three months out of date and still wrong."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 05 — HOW IT WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #F3F2EE
Border-top: 0.5px solid #E5E3DC
Border-bottom: 0.5px solid #E5E3DC
Padding: 80px 32px
Max-width: 960px, centered

Header (centered):
  Eyebrow: "HOW IT WORKS" — same style as before
  H2: "Three steps. Zero awkwardness."
  Margin-bottom: 52px

3-STEP CARDS GRID (gap 24px, equal columns):

Step 1 card — "Add the expense":
  Background: #FFFFFF, border 0.5px #E5E3DC, radius 12px, padding 24px
  
  Step label: "STEP 01" — Inter 700, 11px, #2E7D5E, letter-spacing 0.07em, margin-bottom 16px
  
  PRODUCT UI MOCKUP inside card (bg #F3F2EE, radius 8px, padding 14px, border 0.5px #E5E3DC, margin-bottom 16px):
    Three input rows, each: flex space-between, bg #FFFFFF, border 0.5px #E5E3DC, radius 6px, padding 8px 10px, margin-bottom 6px
    Row 1: "Expense name" label (Inter 400, 11px, #888888) / "Dinner at Momo's" value (Inter 500, 12px, #1A1A1A)
    Row 2: "Total amount" / "£ 86.00"
    Row 3: "Paid by" / "You"
  
  Step title: "Add the expense" — Inter 600, 15px, #1A1A1A, margin-bottom 6px
  Step body: "Log what you spent in seconds. Name it, enter the amount, pick who paid. Done."
  Font: Inter 400, 13px, #555555

Step 2 card — "Splites divides it":
  Step label: "STEP 02"
  
  PRODUCT UI MOCKUP (same container style):
    Label "Split equally between" — Inter 400, 12px, #888888, margin-bottom 8px
    3 chips in flex-wrap, gap 6px:
      Each chip: bg #E8F5EF, color #1A5C42, radius 6px, padding 4px 10px, Inter 600 11px
      "You · £28.67" | "Sara · £28.67" | "Malik · £28.66"
    Below chips, margin-top 12px:
      lucide-react Zap icon (12px, #2E7D5E) + "Debt simplified automatically" — Inter 500, 11px, #2E7D5E
  
  Step title: "Splites divides it"
  Step body: "Equal split or custom amounts — Splites calculates every balance and finds the minimum payments to settle everyone."

Step 3 card — "Everyone settles up":
  Step label: "STEP 03"
  
  PRODUCT UI MOCKUP:
    2 settle rows, each: flex space-between align-center, padding 6px 0, border-bottom 0.5px #F3F2EE
    Row 1: "Sara owes you" (Inter 400, 12px, #555555) | "£ 28.67" (Inter 600, 12px, #1A1A1A) | "Remind" button (bg #2E7D5E, color #fff, radius 4px, padding 4px 10px, Inter 600, 11px)
    Row 2: "Malik owes you" | "£ 140.00" | "Remind" button (same style)
    Below: lucide-react Check icon (12px, #2E7D5E) + "1 tap to mark as settled" — Inter 400, 11px, #888888
  
  Step title: "Everyone settles up"
  Step body: "Send a nudge, mark it settled, and move on. No more chasing. No more guessing."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 06 — FEATURES (3 rows, alternating layout)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #FAFAF8
Padding: 80px 32px
Max-width: 1000px, centered

Header (centered, margin-bottom 52px):
  Eyebrow: "FEATURES"
  H2: "Built for real groups, not just couples"

Each feature row: flex align-center, gap 60px, padding 48px 0, border-bottom 0.5px #E5E3DC
Last row: no border-bottom
Row 2: flex-direction row-reverse (visual right, text left)

— FEATURE ROW 1: "Debt simplified automatically" (text left, visual right) —

TEXT BLOCK (flex: 1):
  Tag: "SMART SPLITTING" — Inter 600, 11px, #2E7D5E, letter-spacing 0.07em, uppercase, margin-bottom 14px
  H3: "Debt simplified automatically" — Inter 600, 24px, #1A1A1A, letter-spacing -0.5px, margin-bottom 12px
  Body: "In a group of six, you don't need six people sending money to six others. Splites analyses all balances and finds the minimum number of payments to settle everyone. One trip, one transfer each."
  Font: Inter 400, 14px, #555555, line-height 1.75, max-width 380px

VISUAL BLOCK (width: 320px, bg #F3F2EE, radius 12px, padding 24px, border 0.5px #E5E3DC):
  Label: "Before · 6 payments" — Inter 500, 12px, #888888, margin-bottom 10px
  3 rows (each flex space-between, padding 6px 0, border-bottom 0.5px #E5E3DC):
    "Sara → Adnan" (Inter 400, 13px, #555555) | "£40" (Inter 600, 13px, #C0392B)
    "Malik → Sara" | "£22"
    "Jamil → Adnan" | "£58"
  
  Divider with arrow: centered lucide-react ArrowDown icon (16px, #2E7D5E) in a 28px circle bg #E8F5EF, margin 14px auto
  
  Label: "After · 2 payments" — Inter 600, 12px, #1A5C42, margin-bottom 10px
  2 rows (each: bg #E8F5EF, radius 6px, padding 6px 10px, flex space-between, margin-bottom 6px):
    "Malik → Adnan" (Inter 500, 13px, #1A5C42) | "£62" (Inter 700, 13px, #1A5C42)
    "Jamil → Adnan" | "£58"

— FEATURE ROW 2: "One group for every occasion" (text right, visual left) —

TEXT BLOCK:
  Tag: "GROUPS & TRIPS"
  H3: "One group for every occasion"
  Body: "Rent with flatmates. Road trip with university friends. Wedding weekend with family. Each group keeps its own history, its own members, its own running tab — completely separate."

VISUAL BLOCK (width: 320px, bg #F3F2EE, radius 12px, padding 20px, border 0.5px #E5E3DC):
  3 group rows, each: bg #FFFFFF, radius 8px, border 0.5px #E5E3DC, padding 12px, margin-bottom 8px, flex align-center gap 12px
  
  Row 1:
    Icon container: 36px square, radius 8px, bg #E8F0FE
    lucide-react Home icon inside, 18px, #1565C0
    Name: "Flat — October" Inter 600, 13px, #1A1A1A
    Sub: "4 members · £1,200 rent" Inter 400, 11px, #888888
    Status pill right: "Settled" bg #E8F5EF, color #1A5C42, radius 20px, 10px 8px padding, Inter 600 11px
  
  Row 2:
    Icon: lucide-react Plane, 18px, #92600A, in bg #FDF3E3 container
    Name: "Bali trip"
    Sub: "6 members · £3,840 total"
    Status: "2 left" — amber pill bg #FDF3E3, color #92600A
  
  Row 3:
    Icon: lucide-react Utensils, 18px, #C0392B, in bg #FEF0EF container
    Name: "Friday dinners"
    Sub: "3 members · ongoing"
    Status: "You owe" — red pill bg #FEF0EF, color #C0392B

— FEATURE ROW 3: "Remind without the guilt" (text left, visual right) —

TEXT BLOCK:
  Tag: "SETTLE UP"
  H3: "Remind without the guilt"
  Body: "A single tap sends a polite nudge through the app. No need to write the message yourself, no need to guess if they saw it. They get a notification. You stay friends."

VISUAL BLOCK (width: 320px, bg #F3F2EE, radius 12px, padding 20px, border 0.5px #E5E3DC):
  Notification card:
    bg #FFFFFF, radius 8px, border 0.5px #E5E3DC, padding 14px, margin-bottom 10px
    Header row: lucide-react Bell icon (14px, #888888) + "Notification preview" (Inter 400, 11px, #888888)
    Sender line: "Sara reminded you" — Inter 600, 13px, #1A1A1A, margin-top 8px
    Message: '"Hey — just a nudge about the Bali trip. £28.67 when you get a chance 😊"'
    Font: Inter 400, 12px, #555555, line-height 1.55, margin-top 4px
  
  Two action buttons (flex, gap 8px):
    Primary: full width flex-1, bg #2E7D5E, color #fff, radius 8px, padding 11px, "Mark as settled" Inter 600, 13px, flex center gap lucide-react Check icon (12px)
    Secondary: bg #F3F2EE, color #555555, radius 8px, padding 11px 16px, "Snooze" Inter 400, 13px, border 0.5px #E5E3DC

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 07 — TESTIMONIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #F3F2EE
Border-top: 0.5px solid #E5E3DC
Padding: 80px 32px
Max-width: 960px, centered

Header (centered, margin-bottom 48px):
  Eyebrow: "REAL PEOPLE. REAL TRIPS."
  H2: "What they said after the holiday"

3-CARD GRID (gap 16px, equal columns, margin-bottom 40px):

Each testimonial card:
  bg #FFFFFF, border 0.5px #E5E3DC, radius 12px, padding 24px

  Stars row: 5× lucide-react Star icons, 14px each, fill #F59E0B, stroke none, gap 2px, margin-bottom 12px

  Quote text: italic, Inter 400, 14px, #1A1A1A, line-height 1.7, margin-bottom 18px

  Author row: flex, gap 10px
    Avatar circle: 34px, rounded-full, color #FFFFFF, Inter 600, 11px
    Name: Inter 600, 13px, #1A1A1A
    Role: Inter 400, 12px, #888888

Card 1:
  Quote: "We did a 10-day Japan trip with seven people. Splites tracked every meal, every train, every snack. By the end we each got one number and one transfer. Unbelievable."
  Avatar: bg #2E7D5E, initials "RL"
  Name: "Rania L."
  Role: "Settled a £4,200 group trip"

Card 2:
  Quote: "My flatmates and I split rent and bills every month. Before Splites it was a whole thing. Now it takes 30 seconds and nobody argues about who forgot the broadband."
  Avatar: bg #1565C0, initials "TM"
  Name: "Tom M."
  Role: "Uses Splites with 3 flatmates"

Card 3:
  Quote: "The debt simplification is genuinely clever. Instead of everyone paying everyone else, Splites figured out we only needed two transfers total. I don't know how but it works."
  Avatar: bg #6A1B9A, initials "AH"
  Name: "Aisha H."
  Role: "Stag weekend organiser"

STORE BADGES ROW (centered, gap 32px, below cards):
  Two store badge cards: bg #FFFFFF, border 0.5px #E5E3DC, radius 10px, padding 14px 22px, flex align-center gap 12px

  Badge 1 (Apple):
    lucide-react Apple icon (or custom Apple SVG), 24px, #1A1A1A
    "Download on the" — Inter 400, 11px, #888888
    "App Store" — Inter 600, 15px, #1A1A1A
    "4.9 · 2,800 ratings" — Inter 500, 12px, #2E7D5E

  Badge 2 (Android):
    lucide-react Play icon, 24px, #1A1A1A (filled triangle)
    "Get it on" / "Google Play" / "4.8 · 1,600 ratings"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 08 — TRUST SIGNALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #FAFAF8
Border-top: 0.5px solid #E5E3DC
Border-bottom: 0.5px solid #E5E3DC
Padding: 56px 32px
Max-width: 860px, centered

3-column grid, gap 40px, text-align center

Item 1:
  Icon container: 44px circle, bg #E8F5EF, margin 0 auto 14px
  Icon: lucide-react Lock, 20px, #2E7D5E, centered inside
  Title: "No bank details required" — Inter 600, 15px, #1A1A1A, margin-bottom 6px
  Body: "Splites tracks who owes what. You settle however you like — bank transfer, cash, PayPal. We never touch your money."
  Font: Inter 400, 13px, #555555, line-height 1.65

Item 2:
  Icon: lucide-react ShieldCheck, 20px, #2E7D5E, same container
  Title: "Your data is private"
  Body: "Expense data is encrypted end-to-end. We don't sell it, share it, or use it for ads. What happens in the group stays in the group."

Item 3:
  Icon: lucide-react Gift, 20px, #2E7D5E, same container
  Title: "Free, and genuinely free"
  Body: "No premium tier you need to unlock the useful bits. No per-transaction fee. Download Splites, use all of it, pay nothing."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 09 — FINAL CTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #1A1A1A
Padding: 96px 32px
Text-align: center

H2: "Your next trip deserves a better ending."
Font: DM Serif Display, 42px, #FFFFFF, letter-spacing -1px, line-height 1.2, margin-bottom 16px

Sub: "Join 14,000+ groups who stopped arguing about money and started enjoying the things they split it for."
Font: Inter 400, 16px, rgba(255,255,255,0.5), max-width 480px, margin 0 auto 40px, line-height 1.75

Button row (flex justify-center, gap 14px):
  Button 1: bg #FFFFFF, color #1A1A1A, padding 14px 28px, radius 8px, Inter 600, 14px
    Content: lucide-react Apple icon (16px, #1A1A1A) + "Download for iOS"
    Icon-text gap: 8px
  Button 2: Same style
    Content: lucide-react Play icon (16px, #1A1A1A) + "Download for Android"

Fine print below buttons (margin-top 22px):
  "Free to download · No account required to browse · Works offline"
  Inter 400, 12px, rgba(255,255,255,0.25)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10 — FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #111111
Border-top: 0.5px solid rgba(255,255,255,0.07)
Padding: 52px 32px 32px
Max-width inner: 1000px, centered

FOOTER TOP — 4-column grid, gap 48px, margin-bottom 48px

Column 1 (Brand, wider — 2fr):
  Logo: "split" + "es" — same as nav, DM Serif Display 20px, split in #FFFFFF, es in #2E7D5E
  Tagline (margin-top 10px): "The simplest way to split bills and keep friendships intact. Free on iOS and Android."
  Font: Inter 400, 13px, rgba(255,255,255,0.38), line-height 1.65, max-width 220px

Columns 2, 3, 4 (each 1fr):

  Column 2 — "PRODUCT":
    Title: "PRODUCT" — Inter 600, 11px, rgba(255,255,255,0.3), letter-spacing 0.08em, uppercase, margin-bottom 14px
    Links (flex column, gap 10px, each Inter 400, 13px, rgba(255,255,255,0.45)):
    How it works / Features / Pricing / Download / Changelog

  Column 3 — "COMPANY":
    Title: "COMPANY"
    Links: About / Blog / Careers / Press kit / Contact us

  Column 4 — "LEGAL":
    Title: "LEGAL"
    Links: Privacy policy / Terms of service / Cookie policy / Security

FOOTER BOTTOM — flex space-between, padding-top 24px, border-top 0.5px rgba(255,255,255,0.07)

  Left: "© 2025 Splites. All rights reserved." — Inter 400, 12px, rgba(255,255,255,0.22)

  Right: Social links (flex, gap 20px):
    lucide-react Twitter icon (14px) + "Twitter"
    lucide-react Instagram icon (14px) + "Instagram"
    lucide-react Linkedin icon (14px) + "LinkedIn"
    Each: Inter 400, 12px, rgba(255,255,255,0.3), flex align-center gap 5px

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL EXECUTION NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. AWWARDS QUALITY comes from three things in this design:
   — The hero card composition with depth and rotation (like Payline reference)
   — The 0.5px borders everywhere instead of shadows (precision over decoration)
   — The restraint: only ONE accent color (#2E7D5E), used only for positive states, CTAs, and feature tags

2. EVERY section that is a product UI mockup must show REAL, FILLED content. No grey placeholder rectangles. No "Lorem ipsum". No empty states. Every card has names, amounts, and statuses.

3. The page alternates between #FAFAF8 base and #F3F2EE surface on every other section. This creates scroll rhythm without using dividers or decorative lines.

4. The font hierarchy is strict:
   DM Serif Display = hero H1 + section H2s + CTA H2 + stats numbers ONLY
   Inter = everything else, no exceptions

5. All product UI inside sections (feature visuals, step mockups) must feel like they were lifted directly from the Splites app. They are not decorative — they are the proof that the product works.

6. Page width: 1440px frame. Content max-width 1100px (hero/features) or 960px (3-column sections) or 900px (centered text sections). Always horizontally centered.

7. The overall page when seen at full height should feel like: Mercury + Splitwise had a child that went to a design school that cares about typography. Quiet confidence, not startup excitement.