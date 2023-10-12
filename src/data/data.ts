const data = [
    {
        id: 1,
        question: 'তুই ডেলি কয় ঘণ্টা ফেসবুক/ইউটিউব/গেমস/ইন্টারনেট আলতু-ফালতু কাজে নষ্ট করস?',
        options: [
            {
                label: 'ডেইলি ১ ঘণ্টার কম',
                value: 2,
                selected: false,
            },
            {
                label: 'ডেইলি ১ থেকে ৩ ঘণ্টার কম',
                value: 1,
                selected: false,
            },
            {
                label: 'ডেইলি ৩ ঘণ্টার বেশি',
                value: 0,
                selected: false,
            }
        ]
    },
    {
        id: 2,
        question: 'গত ১ বছরে তুই কয়টা নতুন স্কিল ডেভেলপ করার চেষ্টা করছস? যেমন এক্সেল, ফটোশপ, ভিডিও এডিট, প্রোগ্রামিং, ওয়েব ডেভেলপ, ইংরেজি শেখা, প্রেজেন্টেনশন পাবলিক স্পিকিং বা অন্য কিছু।',
        options: [
            {
                label: '৩ টার বেশি স্কিল',
                value: 2,
                selected: false,
            },
            {
                label: '২ টা বা ৩ টা',
                value: 1,
                selected: false,
            },
            {
                label: '১ টা বা শূন্য',
                value: 0,
                selected: false,
            }
        ]
    },
    {
        id: 3,
        question: 'গত এক বছরে কয়টা সেমিনার, ওয়ার্কশপে গেছস বা অনলাইনে ভিডিও কোর্স করছস?',
        options: [
            {
                label: '৪ টার বেশি',
                value: 2,
                selected: false,
            },
            {
                label: '২ থেকে ৪ টা',
                value: 1,
                selected: false,
            },
            {
                label: '১ বা তার কম',
                value: 0,
                selected: false,
            }
        ]
    },
    {
        id: 4,
        question: 'তোর যে শখ, স্বপ্ন আছে বা তুই যা হতে চাস, সেটার জন্য গত পাঁচ দিনে কত ঘণ্টা সময় দিছস?',
        options: [
            {
                label: '১০ ঘণ্টার বেশি',
                value: 2,
                selected: false,
            },
            {
                label: '৩ থেকে ১০ ঘণ্টা',
                value: 1,
                selected: false,
            },
            {
                label: '৩ ঘণ্টার কম',
                value: 0,
                selected: false,
            }
        ]
    },
    {
        id: 5,
        question: 'তোর চিন্তাভাবনা, কাজকর্মকে কনট্রোল করে তুই ফিউচারের কোনো কিছুর জন্য কেমন কাজ করিস?',
        options: [
            {
                label: 'খুব সিনসেয়ারলি',
                value: 2,
                selected: false,
            },
            {
                label: 'কিছুটা সিরিয়াস, কিছুটা মাস্তি',
                value: 1,
                selected: false,
            },
            {
                label: 'অতীতের হতাশা, মন খারাপ নিয়ে পড়ে থেকেছি',
                value: 0,
                selected: false,
            }
        ]
    },
    {
        id: 6,
        question: 'তুই কয়জনকে আয়ডল হিসেবে ফলো করস?',
        options: [
            {
                label: '৩ জনের বেশি',
                value: 2,
                selected: false,
            },
            {
                label: '২ বা ৩ জন',
                value: 1,
                selected: false,
            }
        ]
    },
    {
        id: 7,
        question: 'তোর পড়ালেখা/কাজকর্মের কন্ডিশন কেমন? রেজাল্ট/আউটপুট কেমন?',
        options: [
            {
                label: 'সব মিলিয়ে খুব ভালো',
                value: 2,
                selected: false,
            },
            {
                label: 'মোটামুটি',
                value: 1,
                selected: false,
            }
        ]
    },
    {
        id: 8,
        question: 'কোনো কাজ শুরু করা লাগলে কিভাবে শুরু করিস?',
        options: [
            {
                label: 'প্ল্যান করে, খোঁজখবর নিয়ে অনটাইমে শুরু করি',
                value: 2,
                selected: false,
            },
            {
                label: 'অল্প কিছুদিনের মধ্যে শুরু করি',
                value: 1,
                selected: false,
            },
            {
                label: 'ঢিলামি করে লাস্ট মোমেন্টের জন্য রেখে দেই',
                value: 0,
                selected: false,
            }
        ]
    },
    {
        id: 9,
        question: 'কোনো জিনিসের আটকে গেলে, মন খারাপ বা হতাশ লাগলে সেটা কতক্ষণ পর্যন্ত থাকে?',
        options: [
            {
                label: 'কয়েকঘন্টা বা ১ দিনের মধ্যেই শেষ',
                value: 2,
                selected: false,
            },
            {
                label: 'দুই-এক দিনের মধ্যেই শেষ',
                value: 1,
                selected: false,
            },
            {
                label: '২ দিনের বেশিদিন হতাশ হয়ে পড়ে থাকি।',
                value: 0,
                selected: false,
            }
        ]
    },
    {
        id: 10,
        question: 'তুই ওভারঅল কতটা হ্যাপি? তোর খাওয়াদাওয়া, শরীর-স্বাস্থ্য, ফ্যামিলি এবং ফ্রেন্ডদের সাথে তোর রিলেশন কেমন?',
        options: [
            {
                label: 'খুব ভালো',
                value: 2,
                selected: false,
            },
            {
                label: 'মোটামুটি',
                value: 1,
                selected: false,
            },
            {
                label: 'হালুয়া টাইট',
                value: 0,
                selected: false,
            }
        ]
    }
]

export default data;