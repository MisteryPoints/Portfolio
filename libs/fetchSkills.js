export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSkill`)

    const data = await res.json()
    const skills = data.skill

    return skills
}