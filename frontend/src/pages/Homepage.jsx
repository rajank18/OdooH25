import React, { useEffect, useState } from "react";
import axios from "../api/axios.js";
import SkillCard from "../components/SkillCard";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Homepage = () => {
    const [skills, setSkills] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState(""); // "offered" or "wanted"

    // Fetch all approved skills
    useEffect(() => {
        axios
            .get("/skills")
            .then((res) => setSkills(res.data))
            .catch((err) => console.error("Error fetching skills", err));
    }, []);

    // Fetch users based on selected skill and filter
    useEffect(() => {
        if (!selectedSkill) return;
        let url = `/users/search?skill=${selectedSkill}`;
        if (typeFilter) url += `&type=${typeFilter}`;

        axios
            .get(url)
            .then((res) => {
                console.log(res);
                
                const filtered = res.data.filter((user) =>
                    user.username
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                );
                setUsers(filtered);
            })
            .catch((err) => console.error("Error fetching users", err));
    }, [selectedSkill, typeFilter, searchTerm]);

    return (
        <div className="flex flex-col items-center py-8 px-4">
            {/* Filters */}
            <div className="flex items-center gap-4 mb-8 w-full max-w-2xl justify-center bg-white p-4 rounded-xl shadow mt-5">
                {/* Skill Dropdown */}
                <Select onValueChange={(val) => setSelectedSkill(val)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by skill" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Skills</SelectLabel>
                            {skills.map((skill) => (
                                <SelectItem key={skill.id} value={skill.name}>
                                    {skill.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {/* Type Dropdown */}
                <Select onValueChange={(val) => setTypeFilter(val)}>
                    <SelectTrigger className="w-[150px]">
                        <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="offered">Offered</SelectItem>
                        <SelectItem value="wanted">Wanted</SelectItem>
                    </SelectContent>
                </Select>

                {/* Search by Username */}
                <div className="relative w-full max-w-md">
                    <Input
                        type="text"
                        placeholder="Search by username..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
            </div>

            {/* Users */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {users.map((user) => {
                    const offered = user.skills
                        .filter((s) => s.type === "offered")
                        .map((s) => s.Skill?.name)
                        .join(", ");
                    const wanted = user.skills
                        .filter((s) => s.type === "wanted")
                        .map((s) => s.Skill?.name)
                        .join(", ");

                    return (
                        <SkillCard
                            key={user.id}
                            image={`https://ui-avatars.com/api/?name=${user.username}`}
                            name={user.username}
                            offered={offered}
                            wanted={wanted}
                            rating={4.5} // Optional: make dynamic if needed
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Homepage;
