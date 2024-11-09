"use client";
Object.defineProperty(exports, "__esModule", { value: true });
function toggleSkills() {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
}
