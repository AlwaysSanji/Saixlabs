import os
from PIL import Image
import re
import base64
import io

def get_size_kb(filepath):
    if os.path.exists(filepath):
        return os.path.getsize(filepath) / 1024
    return 0

print("=== OPTIMIZING IMAGES & FAVICONS (PURE PNG & SVG ONLY - NO WEBP) ===")

# 1. Optimize Desktop Hero Workstation (PNG)
desk_png = 'src/assets/cyber-workstation.png'
if os.path.exists(desk_png):
    im = Image.open(desk_png).convert('RGBA')
    orig_kb = get_size_kb(desk_png)
    
    im_q = im.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
    im_q.save(desk_png, format='PNG', optimize=True, compress_level=9)
    print(f"Desktop Hero PNG:  {orig_kb:.1f} KB -> {get_size_kb(desk_png):.1f} KB")

# 2. Optimize Mobile Hero Workstation (PNG)
mob_png = 'src/assets/cyber-workstation-mobile.png'
if os.path.exists(mob_png):
    im = Image.open(mob_png).convert('RGBA')
    orig_kb = get_size_kb(mob_png)
    
    im_q = im.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
    im_q.save(mob_png, format='PNG', optimize=True, compress_level=9)
    print(f"Mobile Hero PNG:   {orig_kb:.1f} KB -> {get_size_kb(mob_png):.1f} KB")

# 3. Optimize Wordmark (PNG)
word_png = 'src/assets/saixlabs-wordmark.png'
if os.path.exists(word_png):
    im = Image.open(word_png).convert('RGBA')
    orig_kb = get_size_kb(word_png)
    
    im_q = im.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
    im_q.save(word_png, format='PNG', optimize=True, compress_level=9)
    print(f"Wordmark PNG:      {orig_kb:.1f} KB -> {get_size_kb(word_png):.1f} KB")

# 4. Ensure saixlabs_logo.svg is optimized (PNG buffer inside SVG)
logo_svg = 'saixlabs_logo.svg'
if os.path.exists(logo_svg):
    orig_kb = get_size_kb(logo_svg)
    with open(logo_svg, 'r', encoding='utf-8') as f:
        svg_content = f.read()
    
    match = re.search(r'href="data:image/png;base64,([^"]+)"', svg_content)
    if match:
        b64_data = match.group(1)
        raw_bytes = base64.b64decode(b64_data)
        im_logo = Image.open(io.BytesIO(raw_bytes)).convert('RGBA')
        
        im_logo.thumbnail((240, 204), Image.LANCZOS)
        buf = io.BytesIO()
        im_logo.save(buf, format='PNG', optimize=True, compress_level=9)
        new_b64 = base64.b64encode(buf.getvalue()).decode('ascii')
        
        new_svg = svg_content[:match.start(1)] + new_b64 + svg_content[match.end(1):]
        with open(logo_svg, 'w', encoding='utf-8') as f:
            f.write(new_svg)
            
        print(f"Logo SVG (PNG):    {orig_kb:.1f} KB -> {get_size_kb(logo_svg):.1f} KB")

# 5. Optimize Favicons in public/
fav_png_path = 'public/favicon.png'
fav_ico_path = 'public/favicon.ico'
fav_svg_path = 'public/favicon.svg'
fav_32_path  = 'public/favicon-32x32.png'

if os.path.exists(fav_png_path):
    orig_png_kb = get_size_kb(fav_png_path)
    orig_ico_kb = get_size_kb(fav_ico_path)
    orig_svg_kb = get_size_kb(fav_svg_path)
    
    fav_im = Image.open(fav_png_path).convert('RGBA')
    
    # Generate multi-size ICO (16, 32, 48)
    fav_im.save(fav_ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
    
    # Generate crisp 32x32 tab PNG
    im_32 = fav_im.resize((32, 32), Image.LANCZOS)
    im_32_q = im_32.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
    im_32_q.save(fav_32_path, format='PNG', optimize=True, compress_level=9)
    
    # Generate crisp 192x192 PNG for apple-touch-icon & hi-res favicon
    im_192 = fav_im.resize((192, 192), Image.LANCZOS)
    im_192_q = im_192.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
    im_192_q.save(fav_png_path, format='PNG', optimize=True, compress_level=9)
    
    # Generate lightweight SVG favicon
    im_svg = fav_im.resize((128, 128), Image.LANCZOS)
    im_svg_q = im_svg.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
    buf = io.BytesIO()
    im_svg_q.save(buf, format='PNG', optimize=True, compress_level=9)
    b64 = base64.b64encode(buf.getvalue()).decode('ascii')
    svg_str = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><image width="128" height="128" href="data:image/png;base64,{b64}"/></svg>'
    with open(fav_svg_path, 'w', encoding='utf-8') as f:
        f.write(svg_str)
        
    print(f"Favicon ICO:       {orig_ico_kb:.1f} KB -> {get_size_kb(fav_ico_path):.1f} KB")
    print(f"Favicon PNG:       {orig_png_kb:.1f} KB -> {get_size_kb(fav_png_path):.1f} KB (192x192)")
    print(f"Favicon 32x32 PNG: (new) -> {get_size_kb(fav_32_path):.1f} KB")
    print(f"Favicon SVG:       {orig_svg_kb:.1f} KB -> {get_size_kb(fav_svg_path):.1f} KB")

print("=== ALL ASSETS & FAVICONS OPTIMIZED ===")
