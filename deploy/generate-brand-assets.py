"""Generate favicon and OG image assets from official ZA ERP monogram PNG."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
MONOGRAM = ASSETS / "za-erp-monogram.png"
OG_OUT = ASSETS / "og-image.png"

BG_DEEP = (6, 11, 20)
BG_MID = (10, 18, 32)
GOLD = (212, 168, 83)
GOLD_LIGHT = (232, 196, 120)
EMERALD = (16, 185, 129)
TEXT_MUTED = (180, 190, 210)


def load_monogram() -> Image.Image:
    img = Image.open(MONOGRAM).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    return img


def fit_on_square(src: Image.Image, size: int, pad: float = 0.12) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (*BG_DEEP, 255))
    inner = int(size * (1 - pad * 2))
    ratio = min(inner / src.width, inner / src.height)
    w = max(1, int(src.width * ratio))
    h = max(1, int(src.height * ratio))
    resized = src.resize((w, h), Image.Resampling.LANCZOS)
    x = (size - w) // 2
    y = (size - h) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


def save_favicons(src: Image.Image) -> None:
    for size, name in ((32, "favicon-32x32.png"), (16, "favicon-16x16.png")):
        fit_on_square(src, size).convert("RGB").save(ASSETS / name, optimize=True)

    apple = fit_on_square(src, 180)
    apple.convert("RGB").save(ASSETS / "apple-touch-icon.png", optimize=True)

    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    icons = [fit_on_square(src, s).convert("RGBA") for s, _ in ico_sizes]
    icons[0].save(
        ROOT / "favicon.ico",
        format="ICO",
        sizes=ico_sizes,
        append_images=icons[1:],
    )


def pick_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        if bold
        else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        p = Path(path)
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


def draw_og_image(monogram: Image.Image) -> None:
    w, h = 1200, 630
    img = Image.new("RGB", (w, h), BG_DEEP)
    draw = ImageDraw.Draw(img)

    for y in range(h):
        t = y / h
        r = int(BG_DEEP[0] + (BG_MID[0] - BG_DEEP[0]) * t)
        g = int(BG_DEEP[1] + (BG_MID[1] - BG_DEEP[1]) * t)
        b = int(BG_DEEP[2] + (BG_MID[2] - BG_DEEP[2]) * t)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    draw.line([(0, 420), (w, 420)], fill=(GOLD[0], GOLD[1], GOLD[2], 40), width=1)
    draw.ellipse([880, -120, 1280, 280], outline=(EMERALD[0], EMERALD[1], EMERALD[2]), width=2)
    draw.ellipse([40, 380, 340, 680], outline=(GOLD[0], GOLD[1], GOLD[2]), width=2)

    mono_h = 300
    ratio = mono_h / monogram.height
    mono_w = int(monogram.width * ratio)
    mono = monogram.resize((mono_w, mono_h), Image.Resampling.LANCZOS)
    mx = 120
    my = (h - mono_h) // 2
    img.paste(mono, (mx, my), mono)

    title_font = pick_font(72, bold=True)
    sub_font = pick_font(34)
    tx = mx + mono_w + 80
    ty = h // 2 - 70
    draw.text((tx, ty), "ZA ERP", fill=GOLD_LIGHT, font=title_font)
    draw.text(
        (tx, ty + 92),
        "Cloud ERP Platform for",
        fill=(245, 247, 250),
        font=sub_font,
    )
    draw.text(
        (tx, ty + 138),
        "Business Management",
        fill=TEXT_MUTED,
        font=sub_font,
    )

    bar_y = h - 48
    draw.rectangle([tx, bar_y, tx + 120, bar_y + 4], fill=GOLD)
    draw.rectangle([tx + 132, bar_y, tx + 200, bar_y + 4], fill=EMERALD)

    img.save(OG_OUT, optimize=True)


def main() -> None:
    if not MONOGRAM.exists():
        raise SystemExit(f"Missing monogram: {MONOGRAM}")
    mono = load_monogram()
    save_favicons(mono)
    draw_og_image(mono)
    print("Generated favicon assets and", OG_OUT)


if __name__ == "__main__":
    main()
