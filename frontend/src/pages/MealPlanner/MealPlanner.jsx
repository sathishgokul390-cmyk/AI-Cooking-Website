import { useState } from "react";
import { Plus, Trash2, CalendarDays } from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const mealTypes = ["Breakfast", "Lunch", "Dinner"];

const defaultPlan = () =>
    days.reduce((acc, day) => {
        acc[day] = { Breakfast: "", Lunch: "", Dinner: "" };
        return acc;
    }, {});

export default function MealPlanner() {
    const [plan, setPlan] = useState(defaultPlan());
    const [editing, setEditing] = useState(null); // { day, meal }
    const [inputVal, setInputVal] = useState("");

    const openEdit = (day, meal) => {
        setEditing({ day, meal });
        setInputVal(plan[day][meal]);
    };

    const saveEdit = () => {
        if (!editing) return;
        setPlan((prev) => ({
            ...prev,
            [editing.day]: { ...prev[editing.day], [editing.meal]: inputVal.trim() },
        }));
        setEditing(null);
        setInputVal("");
    };

    const clearCell = (day, meal) => {
        setPlan((prev) => ({
            ...prev,
            [day]: { ...prev[day], [meal]: "" },
        }));
    };

    const mealColor = {
        Breakfast: "text-yellow-500",
        Lunch: "text-green-500",
        Dinner: "text-blue-500",
    };

    return (
        <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* HEADER */}
                <div className="flex items-center gap-3 mb-3">
                    <CalendarDays size={28} className="text-orange-500" />
                    <h1 className="text-4xl font-bold">Meal Planner</h1>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-10">
                    Plan your week — click any cell to add a meal
                </p>

                {/* TABLE */}
                <div className="overflow-x-auto rounded-3xl border border-black/10 dark:border-white/10 shadow-sm">
                    <table className="w-full min-w-[700px] text-sm">
                        <thead>
                            <tr className="bg-white dark:bg-black/40 border-b border-black/10 dark:border-white/10">
                                <th className="text-left px-6 py-4 font-semibold text-slate-500 dark:text-slate-400 w-32">Day</th>
                                {mealTypes.map((m) => (
                                    <th key={m} className={`text-left px-6 py-4 font-semibold ${mealColor[m]}`}>{m}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {days.map((day, i) => (
                                <tr
                                    key={day}
                                    className={`border-b border-black/5 dark:border-white/5 last:border-0 ${i % 2 === 0 ? "bg-white dark:bg-black/20" : "bg-slate-50/50 dark:bg-black/30"
                                        }`}
                                >
                                    <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">{day}</td>
                                    {mealTypes.map((meal) => (
                                        <td key={meal} className="px-6 py-4">
                                            {plan[day][meal] ? (
                                                <div className="flex items-center justify-between gap-2 group">
                                                    <span className="text-sm">{plan[day][meal]}</span>
                                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
                                                        <button
                                                            onClick={() => openEdit(day, meal)}
                                                            className="text-xs text-orange-500 hover:underline"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => clearCell(day, meal)}
                                                            className="text-slate-400 hover:text-red-500 transition"
                                                        >
                                                            <Trash2 size={13} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => openEdit(day, meal)}
                                                    className="flex items-center gap-1.5 text-slate-400 hover:text-orange-500 transition text-xs"
                                                >
                                                    <Plus size={13} /> Add meal
                                                </button>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* MODAL */}
                {editing && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                        <div className="bg-white dark:bg-[#0F172A] border border-black/10 dark:border-white/10 rounded-3xl p-8 w-full max-w-sm shadow-2xl">
                            <h3 className="text-lg font-bold mb-1">{editing.day}</h3>
                            <p className={`text-sm mb-5 font-medium ${mealColor[editing.meal]}`}>{editing.meal}</p>
                            <input
                                autoFocus
                                type="text"
                                value={inputVal}
                                onChange={(e) => setInputVal(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                                placeholder="e.g. Oatmeal with berries"
                                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-black/30 border border-black/10 dark:border-white/10 outline-none text-sm mb-5"
                            />
                            <div className="flex gap-3">
                                <button
                                    onClick={saveEdit}
                                    className="flex-1 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold transition"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditing(null)}
                                    className="flex-1 py-3 rounded-xl border border-black/10 dark:border-white/10 hover:border-orange-400/40 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
