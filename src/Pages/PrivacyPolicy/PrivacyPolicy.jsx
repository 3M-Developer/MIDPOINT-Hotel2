// import { Shield, FileText } from "lucide-react";
import { Helmet } from "react-helmet";
import { FiFileText } from "react-icons/fi";

import { useContext } from "react";
import { SettingsContext } from "../../Context/SettingsContext";
import { useTranslation } from "react-i18next";
export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { currency, siteName_ar, siteName_en } = useContext(SettingsContext);
 const policyParagraphs_en = [
  "At MIDPOINT Hotel – Abha, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our services.",
  "We may collect the following information: personal details (name, email, phone number, address), booking information (dates of stay, room preferences), payment information (processed securely via trusted payment providers), and usage data (website interactions, cookies, analytics).",
  "Your data is used to provide and manage your bookings, improve our services, send promotional offers if you have opted in, and comply with legal and regulatory requirements.",
  "We do not sell your personal information. Your data may be shared with authorized service providers (payment processors, IT providers) or government authorities if legally required.",
  "Our website may use cookies and similar technologies to enhance user experience and analyze traffic.",
  "We implement industry-standard security measures to protect your personal information.",
  "You have the right to access your personal data, request correction or deletion of your data, and opt out of marketing communications.",
  "For questions about your privacy or to exercise your rights, contact us at: Info@midpointhotel.sa or +9668004300070"
];

const policyParagraphs_ar = [
  "في فندق MIDPOINT – أبها، نحترم خصوصيتك وملتزمون بحماية معلوماتك الشخصية. توضح هذه السياسة كيفية جمع معلوماتك واستخدامها وحمايتها عند التفاعل مع خدماتنا.",
  "قد نجمع المعلومات التالية: البيانات الشخصية (الاسم، البريد الإلكتروني، رقم الهاتف، العنوان)، معلومات الحجز (تاريخ الإقامة، تفضيلات الغرفة)، معلومات الدفع (تتم معالجتها بأمان عبر مزودي الدفع الموثوقين)، وبيانات الاستخدام (تفاعل الموقع، ملفات تعريف الارتباط، التحليلات).",
  "تُستخدم بياناتك لتقديم وإدارة الحجوزات والإقامات، تحسين خدماتنا، إرسال عروض ترويجية إذا قمت بالموافقة، والامتثال للمتطلبات القانونية والتنظيمية.",
  "لا نبيع معلوماتك الشخصية. قد نشارك بياناتك مع مزودي خدمات مرخصين (معالجات الدفع، مزودو التقنية) أو السلطات الحكومية إذا تطلب القانون ذلك.",
  "قد يستخدم موقعنا ملفات تعريف الارتباط وتقنيات مشابهة لتعزيز تجربة المستخدم وتحليل حركة المرور.",
  "نطبق معايير أمان صناعية لحماية معلوماتك الشخصية.",
  "لديك الحق في الوصول إلى بياناتك الشخصية، طلب تصحيح أو حذف بياناتك، ورفض استلام الرسائل التسويقية.",
  "للاستفسارات حول الخصوصية أو لممارسة حقوقك، تواصل معنا على: Info@midpointhotel.sa  او +9668004300070"
];
  return (
    <>
      <Helmet>
        <title>
          {lang === "en" ? siteName_en : siteName_ar ?? siteName_en} |{" "}
          {lang === "en" ? "Privacy Policy" : "سياسة الخصوصية"}{" "}
        </title>
      </Helmet>

      <div className="min-h-screen ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-10">
          <div className="bg-white rounded-4xl shadow-sm border border-gray-200 p-8 lg:p-12">
            {/* Privacy & Data Protection */}
            <section id="privacy" className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FiFileText size={40} className=" text-green " />
                <h2 className="text-gray-900 text-4xl font-semibold translate-y-1">
                  {t("privacy.title")}
                  
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                {lang === "en"
                  ? policyParagraphs_en.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))
                  : policyParagraphs_ar.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
