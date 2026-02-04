import { StarFill, StarHalf } from "react-bootstrap-icons"
import { useEffect, useState, useRef } from "react"

const users = [
    {
        image: '/d948ed205b1a93e15c6683609d9debe4cfb43a10.png',
        name: 'Samantha Payne',
        bg: '#E17C7C',
        role: 'Director, Barminhum Collegiate School',
        rating: 4.5,
        review: '"OMS has transformed the way we manage our institution. The user-friendly interface and comprehensive features have made administrative tasks more efficient, allowing us to focus more on delivering quality education. The support team is responsive and always ready to assist. Highly recommended!"',
        date: 'March 15, 2023',
    },
    {
        image: '/1010377820c465d59f118b3022e7100e00446f49.png',
        name: 'John Smith',
        bg: '#FFBB00',
        role: 'Principal, Lincoln High School',
        rating: 5,
        review: '"Excellent platform! The attendance tracking and grade management features have saved us countless hours. Our teachers love the intuitive design."',
        date: 'April 2, 2023',
    },
    {
        image: '/12f6b0769df1bcb43c092cd6552df97adb0f0b97.png',
        name: 'Maria Rodriguez',
        bg: '#FF4DD9',
        role: 'Administrator, Westwood Academy',
        rating: 4,
        review: '"A game-changer for school administration. The parent communication module has improved our engagement rates significantly."',
        date: 'May 10, 2023',
    },
    {
        image: '/02cd84bac0f534c0b23911ecff209c273ae4e828.png',
        name: 'David Chen',
        bg: '#4CAF50',
        role: 'Superintendent, City School District',
        rating: 4.5,
        review: '"The reporting and analytics tools provide valuable insights that help us make data-driven decisions for our district."',
        date: 'June 5, 2023',
    },
    {
        image: '/c356698141550d9ee30cbfb5612da8155a5e0b6c.png',
        name: 'Emma Wilson',
        bg: '#2196F3',
        role: 'Dean, Roosevelt College',
        rating: 4,
        review: '"Streamlined our enrollment process and reduced paperwork by 70%. The support team is exceptional!"',
        date: 'July 20, 2023',
    },
]

const UserSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Get the 3 users to display based on current index
    const getVisibleUsers = () => {
        const visibleUsers = []
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % users.length
            visibleUsers.push(users[index])
        }
        return visibleUsers
    }

    // Auto-scroll functionality
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setIsAnimating(true)
            setCurrentIndex((prev) => (prev + 1) % users.length)
            
            // Reset animation state after transition
            setTimeout(() => setIsAnimating(false), 500)
        }, 3000) // Change every 3 seconds

        return () => clearInterval(scrollInterval)
    }, [])

    // Render stars based on rating
    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 >= 0.5

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarFill key={`full-${i}`} className="text-[#FF9D00] w-4 h-4" />)
        }

        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="text-[#FF9D00] w-4 h-4" />)
        }

        // Fill remaining stars up to 5
        const remainingStars = 5 - stars.length
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<StarFill key={`empty-${i}`} className="text-gray-300 w-4 h-4" />)
        }

        return stars
    }

    const visibleUsers = getVisibleUsers()

    return (
        <div className="py-8 md:py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-2">Voice Matters</h2>
                    <div className="text-xl md:text-2xl font-bold text-[#5E4DE1]">
                        What Our Partner Says About 
                        <img 
                            src="/Group 6357568.svg" 
                            alt="logo" 
                            className="inline-block h-6 md:h-8 ml-2"
                        />
                    </div>
                </div>

                <div className="relative">
                    {/* User Cards Container */}
                    <div
                        ref={containerRef}
                        className={`
                            grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 
                            transition-all duration-500 ease-in-out
                            ${isAnimating ? 'opacity-90' : 'opacity-100'}
                        `}
                    >
                        {visibleUsers.map((user, idx) => (
                            <div
                                key={`${user.name}-${idx}`}
                                className={`
                                    px-5 py-6 border border-[#5E4DE1] rounded-4xl 
                                    bg-white transition-all duration-300
                                    ${idx === 1 ? 'scale-100 z-10 shadow-lg' : 'scale-95 opacity-90'}
                                    hover:shadow-xl hover:scale-[1.02]
                                `}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className='w-12 h-12 md:w-14 md:h-14 rounded-full flex-shrink-0 overflow-hidden border-2 border-white shadow-md'
                                        style={{ backgroundColor: user.bg }}
                                    >
                                        <img
                                            src={user.image}
                                            alt={user.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-sm md:text-base font-semibold truncate">{user.name}</h5>
                                        <p className="text-xs md:text-sm text-[#5E4DE1] truncate">{user.role}</p>
                                        <div className="flex items-center gap-1 mt-1">
                                            {renderStars(user.rating)}
                                            <span className="text-xs text-gray-500 ml-1">
                                                ({user.rating})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
                                        {user.review}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="text-xs text-[#5E4DE1] font-medium">{user.date}</div>
                                    <button className="flex items-center gap-1 text-black font-semibold text-sm hover:text-[#5E4DE1] transition-colors">
                                        show more 
                                        <img 
                                            src="/Icons.svg" 
                                            alt="down-arrow" 
                                            className="w-4 h-4"
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots indicator for mobile */}
                    <div className="flex justify-center gap-2 mt-6 md:hidden">
                        {users.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    idx === currentIndex ? 'bg-[#5E4DE1] w-6' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSection