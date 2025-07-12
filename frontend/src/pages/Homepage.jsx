import React from "react";
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
    return (
        <div className="flex flex-col items-center p y-8 px-4">
            {/* Search & Filter Section */}
            <div className="flex items-center gap-4 mb-8 w-full max-w-2xl justify-center bg-white p-4 rounded-xl shadow">
                {/* Filter Dropdown */}
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by skill" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Skills</SelectLabel>
                            <SelectItem value="webdev">Web Development</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="ml">Machine Learning</SelectItem>
                            <SelectItem value="react">React</SelectItem>
                            <SelectItem value="node">Node.js</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {/* Search Input */}
                <div className="relative w-full max-w-md">
                    <Input
                        type="text"
                        placeholder="Search by name or skill..."
                        className="pr-10"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
            </div>

            {/* Skill Cards */}
            <SkillCard
                image="https://ui-avatars.com/api/?name=Rajan&background=0D8ABC&color=fff"
                name="Rajan Sharma"
                offered="React, UI Design"
                wanted="Node.js, MongoDB"
                rating={4.5}
            />
            <SkillCard
                image="https://ui-avatars.com/api/?name=Priya&background=8e44ad&color=fff"
                name="Priya Mehta"
                offered="Python, ML"
                wanted="Web Dev"
                rating={4.8}
            />
        </div>
    );
};

export default Homepage;
