// ========================================
// وظائف السعودية - الملف الرئيسي الكامل
// ========================================

// بيانات الوظائف
const jobsData = [
    // ========== وظائف حكومية وشركات كبرى ==========
    {
        id: 1,
        title: "وظائف عسكرية - وزارة الداخلية",
        company: "وزارة الداخلية",
        category: "حكومية",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "دوام كامل",
        description: "فتح التقديم للوظائف العسكرية للرجال بمختلف القطاعات",
        link: "bit.ly/3H60Ny6"
    },
    {
        id: 2,
        title: "وظائف شاغرة - مركز أرامكو الطبي",
        company: "مركز أرامكو الطبي",
        category: "طبية",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "دوام كامل",
        description: "69 وظيفة شاغرة للجنسين لحملة الثانوية فأعلى",
        link: "bit.ly/450RFnF"
    },
    {
        id: 3,
        title: "وظائف - الخدمات الطبية للقوات المسلحة",
        company: "الخدمات الطبية للقوات المسلحة",
        category: "طبية",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "دوام كامل",
        description: "88 وظيفة عبر منصة جدارات",
        link: "bit.ly/4lP5yLC"
    },
    {
        id: 4,
        title: "برنامج فني صيانة طائرات - الخطوط الجوية السعودية",
        company: "الخطوط الجوية السعودية",
        category: "تقنية",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "تدريب منتهي بالتوظيف",
        description: "برنامج فني صيانة الطائرات المنتهي بالتوظيف",
        link: "bit.ly/3U40x5u"
    },
    {
        id: 5,
        title: "برنامج تدريب منتهي بالتوظيف - مشروع البحر الأحمر",
        company: "مشروع البحر الأحمر",
        category: "تدريب",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "تدريب منتهي بالتوظيف",
        description: "طرح برنامج تدريب منتهي بالتوظيف لحملة الثانوية",
        link: "bit.ly/40Lwjbg"
    },
    {
        id: 6,
        title: "وظائف شاغرة - شركة بترورابغ",
        company: "شركة بترورابغ",
        category: "هندسة",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "دوام كامل",
        description: "27 وظيفة شاغرة لحملة الثانوية فأعلى من الجنسين",
        link: "bit.ly/4laTgMs"
    },
    {
        id: 7,
        title: "فرص وظيفية - مدينة الملك سلمان للطاقة",
        company: "مدينة الملك سلمان للطاقة",
        category: "هندسة",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "دوام كامل",
        description: "22 فرصة وظيفية لحملة الدبلوم فأعلى",
        link: "bit.ly/453NcAE"
    },
    {
        id: 8,
        title: "وظائف متنوعة - مؤسسة البريد السعودي سبل",
        company: "مؤسسة البريد السعودي سبل",
        category: "إدارية",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "دوام كامل",
        description: "11 وظيفة متنوعة للرجال والنساء",
        link: "bit.ly/3UcvcOe"
    },

    // ========== برامج تدريبية ==========
    {
        id: 9,
        title: "فرص تدريب على رأس العمل - التأمينات الاجتماعية",
        company: "المؤسسة العامة للتأمينات الاجتماعية",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "3000",
        jobType: "تدريب (تمهير)",
        description: "فرص تدريبية بمختلف التخصصات بالتعاون مع صندوق تنمية الموارد البشرية (تمهير)",
        link: "bit.ly/45j80Tt"
    },
    {
        id: 10,
        title: "برنامج تطوير الخريجين - صندوق هدف",
        company: "صندوق تنمية الموارد البشرية (هدف)",
        category: "تدريب",
        qualification: "دبلوم",
        salary: "3000",
        jobType: "تدريب (تمهير)",
        description: "برنامج تطوير الخريجين (تمهير) للرجال والنساء بمكافأة 3000 شهرياً",
        link: "bit.ly/4mrbwlH"
    },
    {
        id: 11,
        title: "وظائف مبيعات وخدمة عملاء - DELIVERYWOLF",
        company: "شركة DELIVERYWOLF",
        category: "مبيعات",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "التواصل مع العملاء عبر الواتساب، إرشاد العملاء خلال خطوات الدفع والتفعيل",
        link: "bit.ly/4lSMJXK"
    },
    {
        id: 12,
        title: "برنامج التدريب التعاوني - الهيئة العامة للإحصاء",
        company: "الهيئة العامة للإحصاء",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب تعاوني",
        description: "برنامج التدريب التعاوني للعام الدراسي 1447هـ للجنسين بمختلف التخصصات",
        link: "bit.ly/4mrHY7A"
    },
    {
        id: 13,
        title: "برنامج التدريب التعاوني - الشركة السعودية للخدمات الأرضية",
        company: "الشركة السعودية للخدمات الأرضية",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب تعاوني",
        description: "برنامج التدريب التعاوني 2025م لطلاب البكالوريوس والدبلوم",
        link: "saudijobs24.com/t156010-topic"
    },
    {
        id: 14,
        title: "برامج دبلوم عن بعد - الجامعة السعودية الإلكترونية",
        company: "الجامعة السعودية الإلكترونية",
        category: "تعليم",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "برامج دبلوم مهني (عن بُعد) للفصل الدراسي الأول",
        link: "bit.ly/45j0o3c"
    },
    {
        id: 15,
        title: "وظائف إدارة سوشيال ميديا - HavanaTextile",
        company: "HavanaTextile",
        category: "تسويق",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "صناعة محتوى جذاب، جدولة المنشورات والتفاعل مع الجمهور",
        link: "bit.ly/3U8r41E"
    },
    {
        id: 16,
        title: "فرص عمل إدارية ومالية - شركة Informatica",
        company: "شركة Informatica",
        category: "إدارية",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "وظائف إدارية ومالية عن بعد مع مزايا متعددة",
        link: "bit.ly/451HKOv"
    },
    {
        id: 17,
        title: "وظائف مالية عن بعد دوام جزئي - شركة بنورراما",
        company: "شركة بنورراما",
        category: "مالية",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "دوام جزئي",
        description: "وظائف مالية للعمل عن بعد بدوام جزئي",
        link: "bit.ly/4mr2F3d"
    },
    {
        id: 18,
        title: "تدريب مبتدئ بالتوظيف - الأكاديمية الوطنية لتقنية المعلومات",
        company: "الأكاديمية الوطنية لتقنية المعلومات",
        category: "تدريب",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "تدريب منتهي بالتوظيف",
        description: "تدريب مبتدئ بالتوظيف لحملة الثانوية",
        link: "bit.ly/44TWo99"
    },
    {
        id: 19,
        title: "برنامج التدريب المبتدئ بالتوظيف - الأكاديمية الوطنية الرائدة",
        company: "الأكاديمية الوطنية الرائدة",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب منتهي بالتوظيف",
        description: "برنامج التدريب المبتدئ بالتوظيف للنساء",
        link: "bit.ly/4lM3CTT"
    },
    {
        id: 20,
        title: "تدريب وتوظيف - معهد الخطوط الحديدية",
        company: "معهد الخطوط الحديدية",
        category: "تدريب",
        qualification: "ثانوية",
        salary: "6500",
        jobType: "تدريب منتهي بالتوظيف",
        description: "تدريب وتوظيف للجنسين برواتب تصل إلى 6,500 ريال",
        link: "bit.ly/457otd8"
    },
    {
        id: 21,
        title: "أخصائي موارد بشرية عن بعد - شركة كبرى للغاز",
        company: "شركة كبرى للغاز",
        category: "موارد بشرية",
        qualification: "بكالوريوس",
        salary: "2500",
        jobType: "عن بعد",
        description: "وظائف شاغرة لأخصائي موارد بشرية عن بُعد",
        link: "saudijobs24.com/t155758-topic"
    },
    {
        id: 22,
        title: "أخصائي دعم فني تقني - شركة تقنية متخصصة",
        company: "شركة تقنية متخصصة",
        category: "تقنية",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "وظائف أخصائيين دعم فني تقني للعمل عن بُعد",
        link: "saudijobs24.com/t156122-topic"
    },
    {
        id: 23,
        title: "وظائف محاسبة عن بعد - شركة تقنية",
        company: "شركة تقنية",
        category: "مالية",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "وظائف محاسبة للرجال والنساء للعمل عن بعد",
        link: "saudijobs24.com/t156125-topic"
    },
    {
        id: 24,
        title: "برنامج التدريب التعاوني - صندوق التنمية الوطني",
        company: "صندوق التنمية الوطني",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب تعاوني",
        description: "برنامج التدريب التعاوني لعام 2025م لطلاب وطالبات الجامعات السعوديين",
        link: "bit.ly/3HcqFbC"
    },
    {
        id: 25,
        title: "برنامج جيل المنتهي بالتوظيف - شركة تحكم التقنية",
        company: "شركة تحكم التقنية",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب منتهي بالتوظيف",
        description: "برنامج (جيل) المنتهي بالتوظيف للتخصصات الإدارية والتقنية",
        link: "bit.ly/3J3XFDm"
    },
    {
        id: 26,
        title: "وظائف مالية وإدارية دوام جزئي - شركة صلة العقارية",
        company: "شركة صلة العقارية",
        category: "مالية",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "دوام جزئي",
        description: "إدارة حسابات الإيجارات والمصاريف للعقارات",
        link: "bit.ly/4lmliVf"
    },
    {
        id: 27,
        title: "وظائف صناعة المحتوى الرقمي - ثمانية",
        company: "ثمانية",
        category: "تسويق",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "62 وظيفة شاغرة في صناعة المحتوى الرقمي مع مزايا ممتازة",
        link: "bit.ly/4mwy0lg"
    },
    {
        id: 28,
        title: "برنامج خبير - ديوان المظالم",
        company: "ديوان المظالم",
        category: "حكومية",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "دوام كامل",
        description: "التقديم في محاكم ديوان المظالم وإداراته عبر برنامج (خبير)",
        link: "bit.ly/4m4hlpd"
    },
    {
        id: 29,
        title: "وظائف إدارية مالية - شركة TestHiring",
        company: "شركة TestHiring",
        category: "إدارية",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "وظائف إدارية مالية للعمل بدوام كامل عن بُعد",
        link: "bit.ly/45DlpHb"
    },
    {
        id: 30,
        title: "برنامج تطوير مهارات اللغة الإنجليزية - شركة السودة للتطوير",
        company: "شركة السودة للتطوير",
        category: "تدريب",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "تدريب",
        description: "برنامج تطوير مهارات اللغة الإنجليزية (الدفعة الثانية)",
        link: "bit.ly/41ypCcO"
    },
    {
        id: 31,
        title: "وظائف إدخال بيانات دوام جزئي - شركة Robotech",
        company: "شركة Robotech",
        category: "إدارية",
        qualification: "ثانوية",
        salary: "غير محدد",
        jobType: "دوام جزئي",
        description: "إدخال البيانات الخاصة بعروض الأسعار والتواصل مع مزودي الخدمة",
        link: "bit.ly/4orqxFO"
    },
    {
        id: 32,
        title: "وظائف إدارة سوشيال ميديا - Sky Richs",
        company: "Sky Richs",
        category: "تسويق",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "كتابة محتوى إبداعي وتنسيق جدول النشر والرد على المتابعين",
        link: "bit.ly/45Dxf4d"
    },
    {
        id: 33,
        title: "برنامج تطوير الخريجين ADP - الشركة السعودية لتقنية المعلومات (سايت)",
        company: "الشركة السعودية لتقنية المعلومات (سايت)",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب منتهي بالتوظيف",
        description: "برنامج تطوير الخريجين مع مكافآت شهرية تنافسية",
        link: "bit.ly/3UYRXFr"
    },
    {
        id: 34,
        title: "برنامج تطوير الخريجين - البنك السعودي للاستثمار",
        company: "البنك السعودي للاستثمار",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب",
        description: "برنامج تطوير الخريجين مع مسار مهني مخصص وحوافز مالية",
        link: "bit.ly/4m7C5wj"
    },
    {
        id: 35,
        title: "تدريب على رأس العمل - شركة التنفيذي (صالات المطارات)",
        company: "شركة التنفيذي",
        category: "تدريب",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "تدريب",
        description: "تدريب على رأس العمل في صالات المطارات بعدة مناطق (الرياض، جدة، الدمام، أبها، عرعر، حائل)",
        link: "bit.ly/4fvQMH5"
    },
    {
        id: 36,
        title: "محاسبة دوام جزئي - شركة هشام رضا التجارية",
        company: "شركة هشام رضا التجارية",
        category: "مالية",
        qualification: "دبلوم",
        salary: "6000",
        jobType: "دوام جزئي",
        description: "وظائف نسائية عن بعد براتب 6000 ريال (محاسبة)",
        link: "bit.ly/45B6xJv"
    },
    {
        id: 37,
        title: "مندوب مبيعات - مؤسسة اكنان نجد للمقاولات",
        company: "مؤسسة اكنان نجد للمقاولات",
        category: "مبيعات",
        qualification: "ثانوية",
        salary: "4000",
        jobType: "عن بعد",
        description: "50 وظيفة لحملة الثانوية براتب أكثر من 4000 ريال (مندوب مبيعات)",
        link: "bit.ly/46PDPWl"
    },
    {
        id: 38,
        title: "خدمة عملاء دوام جزئي - مزرعة سلة البيض للدواجن",
        company: "مزرعة سلة البيض للدواجن",
        category: "خدمة عملاء",
        qualification: "ثانوية",
        salary: "4000",
        jobType: "دوام جزئي",
        description: "وظائف خدمة عملاء عن بعد براتب أكثر من 4000 ريال",
        link: "bit.ly/3UhpwCy"
    },
    {
        id: 39,
        title: "برنامج طويق المنتهي بالتوظيف - البنك العربي",
        company: "البنك العربي الوطني",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب منتهي بالتوظيف",
        description: "برنامج (طويق) المنتهي بالتوظيف في التخصصات الإدارية والتقنية",
        link: "bit.ly/3Hi1sN0"
    },
    {
        id: 40,
        title: "برنامج تطوير الخريجين - مصرف الراجحي",
        company: "مصرف الراجحي",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب",
        description: "برنامج تطوير الخريجين في مسارات الأمن السيبراني ومكافحة الاحتيال",
        link: "bit.ly/47pwj4F"
    },
    {
        id: 41,
        title: "موظفة استقبال دوام جزئي - مركز فرصة التميز للتدريب",
        company: "مركز فرصة التميز للتدريب",
        category: "خدمة عملاء",
        qualification: "ثانوية",
        salary: "4000",
        jobType: "دوام جزئي",
        description: "وظائف نسائية براتب أكثر من 4000 ريال (موظفة استقبال - دوام مسائي)",
        link: "bit.ly/45aZw1R"
    },
    {
        id: 42,
        title: "مساعد إداري دوام جزئي - شركة دار البناء للمقاولات",
        company: "شركة دار البناء للمقاولات",
        category: "إدارية",
        qualification: "دبلوم",
        salary: "5000",
        jobType: "دوام جزئي",
        description: "4 وظائف عن بعد براتب أكثر من 5000 ريال (مساعد إداري)",
        link: "bit.ly/4fwm3d7"
    },
    {
        id: 43,
        title: "محاسب - جمعية أوج للتدريب والتطوير",
        company: "جمعية أوج للتدريب والتطوير والاستشارات",
        category: "مالية",
        qualification: "بكالوريوس",
        salary: "5000",
        jobType: "عن بعد",
        description: "وظائف عن بعد براتب يقارب 5000 ريال (محاسب)",
        link: "bit.ly/4ovdLGg"
    },
    {
        id: 44,
        title: "محصل دوام جزئي - شركة أقطار الجزيرة",
        company: "شركة أقطار الجزيرة",
        category: "مالية",
        qualification: "ثانوية",
        salary: "5000",
        jobType: "دوام جزئي",
        description: "وظائف نسائية عن بعد براتب يقارب 5000 ريال (محصل)",
        link: "bit.ly/4maxDNx"
    },
    {
        id: 45,
        title: "وظائف مبيعات بدون مؤهل - شركة Qaderoon",
        company: "شركة Qaderoon",
        category: "مبيعات",
        qualification: "بدون مؤهل",
        salary: "غير محدد",
        jobType: "عن بعد",
        description: "وظائف عن بعد في المبيعات بدون مؤهل دراسي - مهارات تواصل ممتازة",
        link: "bit.ly/45gNmEU"
    },
    {
        id: 46,
        title: "برنامج تمهير التدريبي - شركة التنفيذي",
        company: "شركة التنفيذي",
        category: "تدريب",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "تدريب (تمهير)",
        description: "برنامج تمهير التدريبي لحملة الدبلوم والبكالوريوس في عدة مدن",
        link: "bit.ly/3J6zUKZ"
    },
    {
        id: 47,
        title: "تدريب في الطاقة المتجددة - معهد الكهرباء",
        company: "معهد الكهرباء",
        category: "تدريب",
        qualification: "بكالوريوس",
        salary: "غير محدد",
        jobType: "تدريب",
        description: "فرصة تدريب مميزة للمهندسات السعوديات في قطاع الطاقة المتجددة مع مكافأة شهرية",
        link: "bit.ly/45x9LMV"
    },
    {
        id: 48,
        title: "سكرتير مساعد افتراضي - شركة ترتيبك السعودية",
        company: "شركة ترتيبك السعودية للاستشارات",
        category: "إدارية",
        qualification: "دبلوم",
        salary: "غير محدد",
        jobType: "دوام جزئي",
        description: "سكرتير (مساعد افتراضي) للعمل عن بعد بنظام الدوام الجزئي (5 ساعات يومياً)",
        link: ""
    },
    {
        id: 49,
        title: "مطلوب موظفات",
        company: "خدمة عملاء متجر الكتروني لمسات مول",
        category: "خدمة عملاء",
        qualification: "لا تشترط الخبرة",
        salary: "3000",
        jobType: "عن بعد",
        description: "مطلوب موظفات خدمة عملاء عن بعد براتب 3000 لا تشترط الخبرة",
        link: ""
    }
];

let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];

// ========================================
// دالة عرض الوظائف (مع إضافة خاصية النقر للتفاصيل)
// ========================================

function displayFilteredJobs(jobs) {
    const container = document.getElementById('jobs-container');
    if (!container) return;
    
    // تحديث عدد النتائج
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.innerText = jobs.length;
    }
    
    if (jobs.length === 0) {
        container.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>لا توجد وظائف مطابقة للبحث <i class="fas fa-frown"></i></p><button onclick="resetFilters()" class="btn-reset-page">عرض جميع الوظائف</button></div>';
        return;
    }
    
    container.innerHTML = '';
    jobs.forEach(job => {
        const isSaved = savedJobs.includes(job.id);
        const heartClass = isSaved ? 'fas fa-heart active' : 'far fa-heart';
        
        container.innerHTML += `
            <div class="job-card" onclick="goToJobDetails(${job.id})" style="cursor: pointer;">
                <div class="job-header">
                    <span class="job-badge">${job.jobType}</span>
                    <i class="${heartClass} job-fav" data-id="${job.id}" onclick="event.stopPropagation(); toggleSavedJobInCard(${job.id}, this)"></i>
                </div>
                <h3 class="job-title">${job.title}</h3>
                <p class="job-company"><i class="fas fa-building"></i> ${job.company}</p>
                <div class="job-details">
                    <span><i class="fas fa-graduation-cap"></i> ${job.qualification}</span>
                    <span><i class="fas fa-money-bill-wave"></i> ${job.salary} ريال</span>
                </div>
                <p class="job-desc">${job.description.substring(0, 80)}...</p>
                <a href="apply.html?job=${job.id}" class="btn-apply" onclick="event.stopPropagation();">تقديم الآن <i class="fas fa-arrow-left"></i></a>
            </div>
        `;
    });
}

// ========================================
// دالة تصفية الوظائف
// ========================================

function filterJobs() {
    const category = document.getElementById('filterCategory')?.value;
    const qualification = document.getElementById('filterQualification')?.value;
    const jobType = document.getElementById('filterType')?.value;
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase().trim();
    
    let filtered = [...jobsData];
    
    // تطبيق الفلاتر
    if (category && category !== 'all') {
        filtered = filtered.filter(job => job.category === category);
    }
    if (qualification && qualification !== 'all') {
        filtered = filtered.filter(job => job.qualification === qualification);
    }
    if (jobType && jobType !== 'all') {
        filtered = filtered.filter(job => job.jobType.includes(jobType));
    }
    
    // تطبيق البحث
    if (searchTerm && searchTerm !== '') {
        filtered = filtered.filter(job => 
            job.title.toLowerCase().includes(searchTerm) || 
            job.company.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayFilteredJobs(filtered);
    
    if (filtered.length === 0 && searchTerm) {
        showToast('لا توجد نتائج للبحث: ' + searchTerm);
    }
}

// ========================================
// دالة البحث المستقلة
// ========================================

function searchJobsFunction() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filterJobs();
        return;
    }
    
    let filtered = [...jobsData];
    
    const category = document.getElementById('filterCategory')?.value;
    const qualification = document.getElementById('filterQualification')?.value;
    const jobType = document.getElementById('filterType')?.value;
    
    if (category && category !== 'all') {
        filtered = filtered.filter(job => job.category === category);
    }
    if (qualification && qualification !== 'all') {
        filtered = filtered.filter(job => job.qualification === qualification);
    }
    if (jobType && jobType !== 'all') {
        filtered = filtered.filter(job => job.jobType.includes(jobType));
    }
    
    filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm) || 
        job.company.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm)
    );
    
    displayFilteredJobs(filtered);
    
    if (filtered.length === 0) {
        showToast('لا توجد نتائج للبحث: ' + searchTerm);
    } else {
        showToast(`تم العثور على ${filtered.length} نتيجة`);
    }
}

// ========================================
// دالة إعادة تعيين الفلاتر
// ========================================

function resetFilters() {
    const categorySelect = document.getElementById('filterCategory');
    const qualificationSelect = document.getElementById('filterQualification');
    const typeSelect = document.getElementById('filterType');
    const searchInput = document.getElementById('searchInput');
    
    if (categorySelect) categorySelect.value = 'all';
    if (qualificationSelect) qualificationSelect.value = 'all';
    if (typeSelect) typeSelect.value = 'all';
    if (searchInput) searchInput.value = '';
    
    displayFilteredJobs(jobsData);
    showToast('تم إعادة تعيين الفلاتر والبحث');
}

// ========================================
// تشغيل الدوال عند تحميل الصفحة (موحد)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // ====== 1. عرض الوظائف ======
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'job-details.html') {
        displayJobDetails();
    } else {
        displayFilteredJobs(jobsData);
    }
    
    checkAuth();
    
    // ====== 2. البحث والفلاتر ======
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (searchBtn) searchBtn.addEventListener('click', searchJobsFunction);
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') searchJobsFunction();
        });
    }
    
    const filterCategory = document.getElementById('filterCategory');
    const filterQualification = document.getElementById('filterQualification');
    const filterType = document.getElementById('filterType');
    const resetBtn = document.getElementById('resetFilters');
    
    if (filterCategory) filterCategory.addEventListener('change', filterJobs);
    if (filterQualification) filterQualification.addEventListener('change', filterJobs);
    if (filterType) filterType.addEventListener('change', filterJobs);
    if (resetBtn) resetBtn.addEventListener('click', resetFilters);
    
    // ====== 3. أنماط CSS ======
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .btn-reset-page {
            background: #C9A03D;
            color: #165B33;
            border: none;
            padding: 10px 25px;
            border-radius: 30px;
            margin-top: 20px;
            cursor: pointer;
            font-weight: bold;
            font-family: 'Tajawal', sans-serif;
        }
        .btn-reset-page:hover {
            background: #b88d2e;
        }
        .no-results {
            text-align: center;
            padding: 60px;
            background: white;
            border-radius: 20px;
        }
        .no-results i {
            font-size: 48px;
            color: #C9A03D;
            margin-bottom: 15px;
        }
        .no-results p {
            color: #666;
            font-size: 18px;
        }
    `;
    document.head.appendChild(style);
    
    // ====== 4. تفعيل زر الهمبرجر (القائمة الجانبية) ======
    
// ====== 4. تفعيل زر الهمبرجر (القائمة الجانبية) ======

// إنشاء القائمة الجانبية
const overlay = document.createElement('div');
overlay.className = 'sidebar-overlay';

const sidebar = document.createElement('div');
sidebar.className = 'sidebar';
sidebar.innerHTML = `
    <button class="close-sidebar" aria-label="إغلاق"><i class="fas fa-times"></i></button>
    
    <div class="sidebar-logo-top">
        <img src="img/logo.jpg" alt="أبشر توظيف" class="sidebar-logo-img">
    </div>
    
    <div class="sidebar-nav">
        <a href="index.html"><i class="fas fa-home"></i> الرئيسية</a>
        <a href="jobs.html"><i class="fas fa-briefcase"></i> الوظائف</a>
        <a href="favorites.html"><i class="fas fa-heart"></i> المفضلة</a>
        <a href="terms.html"><i class="fas fa-building"></i> عن أبشر أعمال</a>
    </div>
    
    <div class="sidebar-auth">
        <a href="jobs.html" class="btn-register-sidebar"><i class="fas fa-briefcase"></i> تقديم على وظيفة</a>
    </div>
    
    <div class="sidebar-logo-bottom">
        <img src="img/logo15.png" alt="رؤية المملكة العربية السعودية 2030" class="sidebar-logo-bottom-img">
        <p>رؤية المملكة 2030</p>
    </div>
`;
overlay.appendChild(sidebar);
document.body.appendChild(overlay);
    
    // ربط زر الهمبرجر
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            overlay.classList.add('active');
            sidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // دالة إغلاق القائمة
    function closeMenu() {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // زر الإغلاق
    const closeBtn = document.querySelector('.close-sidebar');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
    
    // الضغط خارج القائمة
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeMenu();
    });
    
    // الضغط على أي رابط في القائمة
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
// ========================================
// دالة عرض إشعار منبثق (Toast)
// ========================================

function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    const bgColor = type === 'success' ? '#165B33' : (type === 'error' ? '#e74c3c' : '#C9A03D');
    
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : (type === 'error' ? 'exclamation-circle' : 'info-circle')}"></i> ${message}`;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-size: 14px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        direction: rtl;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ========================================
// دالة التحقق من حالة تسجيل الدخول
// ========================================

function checkAuth() {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    const protectedPages = ['dashboard.html', 'employer-dashboard.html', 'admin-dashboard.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage) && !isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// ========================================
// دوال تفاصيل الوظيفة (النقر على البطاقة)
// ========================================

// دالة الانتقال إلى صفحة تفاصيل الوظيفة
function goToJobDetails(jobId) {
    window.location.href = `job-details.html?id=${jobId}`;
}

// دالة حفظ المفضلة من البطاقة
function toggleSavedJobInCard(jobId, element) {
    event.stopPropagation();
    let savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || [];
    const index = savedJobs.indexOf(jobId);
    
    if (index === -1) {
        savedJobs.push(jobId);
        element.classList.remove('far');
        element.classList.add('fas', 'active');
        showToast('تم حفظ الوظيفة في المفضلة 💚', 'success');
    } else {
        savedJobs.splice(index, 1);
        element.classList.remove('fas', 'active');
        element.classList.add('far');
        showToast('تم إزالة من المفضلة', 'info');
    }
    localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
}

// دالة عرض تفاصيل الوظيفة في صفحة منفصلة
function displayJobDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobId = parseInt(urlParams.get('id'));
    
    if (!jobId) {
        window.location.href = 'jobs.html';
        return;
    }
    
    const job = jobsData.find(j => j.id === jobId);
    
    if (!job) {
        const container = document.getElementById('jobDetailsContainer');
        if (container) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>عذراً، الوظيفة غير موجودة</h3>
                    <p>قد تكون الوظيفة قد انتهت أو تم حذفها</p>
                    <a href="jobs.html" class="btn-reset-page">العودة إلى الوظائف</a>
                </div>
            `;
        }
        return;
    }
    
    let savedJobsLocal = JSON.parse(localStorage.getItem('savedJobs')) || [];
    const isSaved = savedJobsLocal.includes(job.id);
    
    const container = document.getElementById('jobDetailsContainer');
    if (!container) return;
    
    container.innerHTML = `
        <div class="job-details-card">
            <div class="job-details-header">
                <span class="job-badge-details">${job.jobType}</span>
                <h1>${job.title}</h1>
                <div class="job-company-details">
                    <i class="fas fa-building"></i>
                    <span>${job.company}</span>
                </div>
            </div>
            
            <div class="job-details-body">
                <div class="info-grid">
                    <div class="info-item">
                        <i class="fas fa-graduation-cap"></i>
                        <div>
                            <span class="info-label">المؤهل المطلوب</span>
                            <span class="info-value">${job.qualification}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-money-bill-wave"></i>
                        <div>
                            <span class="info-label">الراتب</span>
                            <span class="info-value">${job.salary} ريال</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-briefcase"></i>
                        <div>
                            <span class="info-label">نوع الدوام</span>
                            <span class="info-value">${job.jobType}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-tag"></i>
                        <div>
                            <span class="info-label">التصنيف</span>
                            <span class="info-value">${job.category}</span>
                        </div>
                    </div>
                </div>
                
                <div class="job-section">
                    <h3>📋 وصف الوظيفة</h3>
                    <p>${job.description}</p>
                </div>
                
                <div class="job-section">
                    <h3>📌 طريقة التقديم</h3>
                    <p>للتقديم على هذه الوظيفة، يرجى الضغط على زر "تقديم الآن" أدناه.</p>
                </div>
                
                <div style="text-align: center;">
                    <a href="apply.html?job=${job.id}" class="btn-apply-details">
                        <i class="fas fa-paper-plane"></i> تقديم الآن
                    </a>
                </div>
            </div>
        </div>
    `;
    
    const saveBtn = document.getElementById('saveJobBtn');
    if (saveBtn) {
        if (isSaved) {
            saveBtn.innerHTML = '<i class="fas fa-heart"></i> تم الحفظ في المفضلة';
            saveBtn.classList.add('saved');
        } else {
            saveBtn.innerHTML = '<i class="far fa-heart"></i> حفظ في المفضلة';
            saveBtn.classList.remove('saved');
        }
        
        saveBtn.onclick = function() {
            toggleSavedJobInDetails(job.id, saveBtn);
        };
    }
}

// دالة حفظ/إزالة المفضلة من صفحة التفاصيل
function toggleSavedJobInDetails(jobId, button) {
    let savedJobsLocal = JSON.parse(localStorage.getItem('savedJobs')) || [];
    const index = savedJobsLocal.indexOf(jobId);
    
    if (index === -1) {
        savedJobsLocal.push(jobId);
        button.innerHTML = '<i class="fas fa-heart"></i> تم الحفظ في المفضلة';
        button.classList.add('saved');
        showToast('✓ تم حفظ الوظيفة في المفضلة', 'success');
    } else {
        savedJobsLocal.splice(index, 1);
        button.innerHTML = '<i class="far fa-heart"></i> حفظ في المفضلة';
        button.classList.remove('saved');
        showToast('✗ تم إزالة الوظيفة من المفضلة', 'info');
    }
    
    localStorage.setItem('savedJobs', JSON.stringify(savedJobsLocal));
}
// ========================================
// بنر السلايدر المتغير تلقائياً
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let slideInterval;
    const intervalTime = 4000; // 5 ثواني

    // دالة لعرض الشريحة المحددة
    function showSlide(index) {
        // التأكد من أن index ضمن النطاق الصحيح
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        // إزالة الكلاس active من جميع الشرائح والنقاط
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // إضافة الكلاس active للشريحة والنقطة الحالية
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
    }

    // دالة للانتقال إلى الشريحة التالية
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // دالة للانتقال إلى الشريحة السابقة
    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // بدء التشغيل التلقائي
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    // إيقاف التشغيل التلقائي
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // إضافة مستمعي الأحداث للأزرار
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }

    // إضافة مستمعي الأحداث للنقاط
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // إيقاف التشغيل التلقائي عند تمرير الماوس على السلايدر
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);
    }

    // بدء التشغيل التلقائي عند تحميل الصفحة
    startAutoSlide();
});
// جعل الدوال عامة للاستخدام في HTML
// جعل الدوال عامة للاستخدام في HTML
window.resetFilters = resetFilters;
window.filterJobs = filterJobs;
window.searchJobsFunction = searchJobsFunction;
window.goToJobDetails = goToJobDetails;
window.toggleSavedJobInCard = toggleSavedJobInCard;
window.showToast = showToast;
window.displayJobDetails = displayJobDetails;
window.checkAuth = checkAuth;
