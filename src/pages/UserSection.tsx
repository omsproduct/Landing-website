import { StarFill, StarHalf } from "react-bootstrap-icons"
import { ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"

interface UserReview {
    readonly image: string
    readonly name: string
    readonly bg: string
    readonly role: string
    readonly rating: number
    readonly review: string
    readonly date: string
}

/* ---------------- USERS ---------------- */

const users: readonly UserReview[] = [
    {
        image: 'https://res.cloudinary.com/dflelt85r/image/upload/v1770185806/c356698141550d9ee30cbfb5612da8155a5e0b6c_t4zinm.png',
        name: 'Samantha Payne',
        bg: '#E17C7C',
        role: 'Director, Barminhum Collegiate School',
        rating: 4.5,
        review: '"OMS has transformed the way we manage our institution. The user-friendly interface and comprehensive features have made administrative tasks more efficient, allowing us to focus more on delivering quality education. The support team is responsive and always ready to assist. Highly recommended!"',
        date: 'March 15, 2023',
    },
    {
        image: 'https://res.cloudinary.com/dflelt85r/image/upload/v1770185806/d948ed205b1a93e15c6683609d9debe4cfb43a10_neqppz.png',
        name: 'John Smith',
        bg: '#FFBB00',
        role: 'Principal, Lincoln High School',
        rating: 5,
        review: '"Excellent platform! The attendance tracking and grade management features have saved us countless hours. Our teachers love the intuitive design."',
        date: 'April 2, 2023',
    },
    {
        image: 'https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/02cd84bac0f534c0b23911ecff209c273ae4e828_xzbske.png',
        name: 'Maria Rodriguez',
        bg: '#FF4DD9',
        role: 'Administrator, Westwood Academy',
        rating: 4,
        review: '"A game-changer for school administration. The parent communication module has improved our engagement rates significantly."',
        date: 'May 10, 2023',
    },
    {
        image: 'https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/12f6b0769df1bcb43c092cd6552df97adb0f0b97_i5bpv6.png',
        name: 'David Chen',
        bg: '#4CAF50',
        role: 'Superintendent, City School District',
        rating: 4.5,
        review: '"The reporting and analytics tools provide valuable insights that help us make data-driven decisions for our district."',
        date: 'June 5, 2023',
    },
    {
        image: 'https://res.cloudinary.com/dflelt85r/image/upload/v1770185804/1010377820c465d59f118b3022e7100e00446f49_qecu44.png',
        name: 'Emma Wilson',
        bg: '#2196F3',
        role: 'Dean, Roosevelt College',
        rating: 4,
        review: '"Streamlined our enrollment process and reduced paperwork by 70%. The support team is exceptional!"',
        date: 'July 20, 2023',
    },
]


/* ---------------- COMPONENT ---------------- */

const UserSection = () => {
    const trackRef = useRef<HTMLDivElement | null>(null)
    const offsetRef = useRef(0)
    const pausedRef = useRef(false)

    // duplicate for infinite loop
    const loopUsers = [...users, ...users]

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        let rafId: number
        const speed = 0.35

        const animate = () => {
            if (!pausedRef.current) {
                offsetRef.current += speed
                track.style.transform = `translateX(-${offsetRef.current}px)`

                if (offsetRef.current >= track.scrollWidth / 2) {
                    offsetRef.current = 0
                }
            }

            rafId = requestAnimationFrame(animate)
        }

        // Start animation only on desktop
        const isDesktop = window.innerWidth >= 768
        if (isDesktop) {
            rafId = requestAnimationFrame(animate)
        }

        return () => {
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    const renderStars = (rating: number) => {
        const stars: React.ReactNode[] = []
        const full = Math.floor(rating)
        const half = rating % 1 >= 0.5

        for (let i = 0; i < full; i++) {
            stars.push(
                <StarFill key={`full-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9D00]" />
            )
        }

        if (half) {
            stars.push(
                <StarHalf key="half" className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9D00]" />
            )
        }

        while (stars.length < 5) {
            stars.push(
                <StarFill
                    key={`empty-${stars.length}`}
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300"
                />
            )
        }

        return stars
    }

    return (
        <section className="py-6 sm:py-8 md:py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1.5">Voice Matters</h2>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#5E4DE1] mb-6 md:mb-7.5">
                    What Our Partner Says About
                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                        alt="logo"
                        className="inline-block h-4 sm:h-5 md:h-6 lg:h-8 ml-1 sm:ml-2"
                    />
                </div>

                {/* VIEWPORT */}
                <div
                    className="overflow-hidden"
                    onMouseEnter={() => (pausedRef.current = true)}
                    onMouseLeave={() => (pausedRef.current = false)}
                >
                    {/* TRACK - Responsive layout changes */}
                    <div
                        ref={trackRef}
                        className="flex gap-4 sm:gap-5 md:gap-6 w-max will-change-transform md:transform-none"
                    >
                        {loopUsers.map((user, idx) => (
                            <div
                                key={`${user.name}-${idx}`}
                                className="w-[calc(100vw-3rem)] sm:w-80 md:w-87.5 shrink-0 bg-white border border-[#5E4DE1] rounded-3xl md:rounded-4xl px-4 sm:px-5 md:px-6 py-4 sm:py-5 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                    <div
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0"
                                        style={{ backgroundColor: user.bg }}
                                    >
                                        <img
                                            src={user.image}
                                            alt={user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h5 className="font-semibold text-sm sm:text-base truncate">{user.name}</h5>
                                        <p className="text-xs sm:text-sm text-[#5E4DE1] truncate">{user.role}</p>
                                        <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
                                            {renderStars(user.rating)}
                                            <span className="text-xs text-gray-500 ml-1">
                                                ({user.rating})
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                                    {user.review}
                                </p>

                                <div className="space-y-3.5 text-xs">
                                    <p className="flex items-center gap-1 hover:opacity-80 transition-opacity text-xs font-bold text-black">
                                        show more <ChevronDown size={12} className="sm:w-3.5 sm:h-3.5" />
                                    </p>
                                    <span className="text-[10px] text-[#5E4DE1]">{user.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile indicators (optional) */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {users.map((_, idx) => (
                        <div
                            key={idx}
                            className="w-2 h-2 rounded-full bg-gray-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UserSection