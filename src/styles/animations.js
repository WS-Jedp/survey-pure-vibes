export const smoothTransision = (duration = .5) => {
    return {
        duration: duration,
        ease: [.43, .013, 0.23, .9]
    }
}

const defaultTransition = smoothTransision(1)

export const leftToRightVariants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ...defaultTransition
        }
    },
    hidden: {
        opacity: 0,
        x: -42
    },
    exit: {
        opacity: 0,
        x: -42
    }
}
export const rightToLeftVariants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ...defaultTransition
        }
    },
    hidden: {
        opacity: 0,
        x: 42
    },
    exit: {
        opacity: 0,
        x: 42
    }
}

export const upToDownVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ...defaultTransition
        }
    },
    hidden: {
        opacity: 0,
        y: -42
    },
    exit: {
        opacity: 0,
        y: -42
    }
}

export const downToUpVariants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ...defaultTransition
        }
    },
    hidden: {
        opacity: 0,
        y: 42
    },
    exit: {
        opacity: 0,
        y: 42
    }
}

export const containerVariants = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: .5,
            ...defaultTransition
        }
    },
    hidden: {
        opacity: 0
    },
    exit: {
        opacity: 0,
    }
}

