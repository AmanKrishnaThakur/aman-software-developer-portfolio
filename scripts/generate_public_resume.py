"""Generate the public resume PDF. Requires PyMuPDF; no private inputs are read."""

from pathlib import Path

import fitz


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "resume" / "aman-krishna-thakur-resume.pdf"
INK = (0.09, 0.15, 0.16)
TEAL = (0.05, 0.42, 0.39)


def main():
    document = fitz.open()
    page = document.new_page(width=595, height=842)
    font = fitz.Font("helv")
    y = 48

    def text(value, size=10, bold=False, color=INK, gap=4):
        nonlocal y
        name = "hebo" if bold else "helv"
        metric = fitz.Font(name) if bold else font
        lines, line = [], ""
        for word in value.split():
            candidate = (line + " " + word).strip()
            if metric.text_length(candidate, fontsize=size) > 507 and line:
                lines.append(line)
                line = word
            else:
                line = candidate
        if line:
            lines.append(line)
        for line in lines:
            if y > 793:
                raise ValueError("Resume content exceeds one page.")
            page.insert_text((44, y), line, fontname=name, fontsize=size, color=color)
            y += size * 1.45
        y += gap

    def heading(value):
        nonlocal y
        y += 7
        text(value.upper(), size=10, bold=True, color=TEAL, gap=5)

    text("Aman Krishna Thakur", size=23, bold=True, gap=3)
    text("Full Stack Developer | New Delhi, India", size=11, gap=4)
    for label, url in [
        ("amanthakur36000@gmail.com", "mailto:amanthakur36000@gmail.com"),
        ("github.com/AmanKrishnaThakur", "https://github.com/AmanKrishnaThakur"),
        ("LinkedIn: Aman Krishna Thakur", "https://www.linkedin.com/in/aman-krishna-thakur-868322248/"),
    ]:
        start = y
        text(label, size=9, color=TEAL, gap=0)
        page.insert_link({
            "kind": fitz.LINK_URI,
            "from": fitz.Rect(44, start - 10, 44 + font.text_length(label, fontsize=9), start + 3),
            "uri": url,
        })

    heading("Profile")
    text("Full Stack Developer Intern contributing to a production GRC fintech application. "
         "Builds with HTML, CSS, JavaScript, React and TypeScript on the frontend, alongside "
         "Node.js, PostgreSQL and AWS. Open to junior software engineering opportunities, including remote roles.")

    heading("Skills")
    text("Frontend: HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Vite, TanStack Query, Zod", gap=2)
    text("Backend & Data: Node.js, REST APIs, PostgreSQL, SQL", gap=2)
    text("Cloud: AWS, Lambda, API Gateway, RDS, S3, Cognito, CDK, CloudWatch", gap=2)
    text("Engineering Tools: Git, GitHub, Vitest, Postman, OpenAPI / Swagger", gap=2)

    heading("Experience")
    text("Full Stack Developer Intern | Complyr | Oct 2025 - Present", bold=True)
    for point in [
        "Build and maintain production application features across frontend, backend, database and cloud layers.",
        "Develop interfaces, APIs, authentication and authorization flows, and business workflows.",
        "Debug and maintain cloud-backed application features and integrations using Git-based workflows.",
        "Use AI coding tools for implementation support, debugging and research; review and validate generated code.",
    ]:
        text("- " + point, gap=2)

    heading("Selected Personal Projects")
    text("Movie Discovery & Search: Fetches popular movies and search results from TMDB and builds poster and title cards using DOM APIs.", gap=3)
    text("Weather App: Uses Fetch API and async/await to retrieve current weather and render conditions or an error state.", gap=3)
    text("Dragon Repeller RPG (In Progress): Explores locations, inventory, combat, upgrades and player progression with JavaScript state.", gap=3)

    heading("Education")
    text("B.Sc. in Computer Science, Statistics and Mathematics", bold=True, gap=2)
    text("Chandigarh University | Graduated June 2024")
    document.set_metadata({
        "title": "Aman Krishna Thakur | Full Stack Developer",
        "author": "Aman Krishna Thakur",
        "subject": "Public software development resume",
    })
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document.save(OUTPUT, garbage=4, deflate=True)
    document.close()
    print(f"Generated public resume: {OUTPUT}")


if __name__ == "__main__":
    main()
