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
    "wemisc respects your privacy and is committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data when you use the Service. By using the Service, you consent to the collection and use of your personal data as described in the Privacy Policy.",
    "If you use the Service to process data on behalf of others (e.g., tenants or clients), you are responsible for complying with applicable data protection laws, including securing necessary consents and ensuring lawful processing of personal data.",
    'The Service is provided "as is" and "as available," without any warranties or guarantees. wemisc does not warrant that the Service will meet your requirements, be uninterrupted, secure, or free of errors.',
    "To the fullest extent permitted by law, wemisc disclaims all liability for any damages arising from:",
    "• Your use or inability to use the Service.",
    "• Errors, omissions, or inaccuracies in the content provided through the Service.",
    "• Any third-party interactions, including tenant or vendor disputes.",
    "In no event shall wemisc total liability exceed the amount you paid for the Service in the last 12 months.",
    "You agree to indemnify, defend, and hold harmless wemisc, its affiliates, employees, agents, and partners from any claims, losses, damages, liabilities, and expenses (including legal fees) arising out of:",
    "• Your violation of these Terms.",
    "• Your use of the Service in an unlawful manner.",
    "• Any content you submit to the Service.",
  ];
  const policyParagraphs_ar = [
    "تحترم شركة wemisc خصوصيتك وتلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية الخاصة بنا كيفية جمع بياناتك واستخدامها وحمايتها عند استخدامك للخدمة. وباستخدامك للخدمة، فإنك توافق على جمع واستخدام بياناتك الشخصية كما هو موضح في سياسة الخصوصية.",
    "في حال استخدامك للخدمة لمعالجة بيانات نيابةً عن أطراف أخرى (مثل المستأجرين أو العملاء)، فأنت تتحمل مسؤولية الامتثال لقوانين حماية البيانات المعمول بها، بما في ذلك الحصول على الموافقات اللازمة وضمان المعالجة القانونية للبيانات الشخصية.",
    'يتم تقديم الخدمة "كما هي" و"حسب توفرها"، دون أي ضمانات أو تعهدات. ولا تضمن wemisc أن تلبي الخدمة متطلباتك أو أن تكون دون انقطاع أو آمنة أو خالية من الأخطاء.',
    "إلى أقصى حد يسمح به القانون، تخلي wemisc مسؤوليتها عن أي أضرار ناتجة عن:",
    "• استخدامك للخدمة أو عدم قدرتك على استخدامها.",
    "• أي أخطاء أو سهو أو معلومات غير دقيقة في المحتوى المقدم من خلال الخدمة.",
    "• أي تعاملات مع أطراف ثالثة، بما في ذلك النزاعات مع المستأجرين أو الموردين.",
    "في جميع الأحوال، لن تتجاوز المسؤولية الإجمالية لشركة wemisc المبلغ الذي قمت بدفعه مقابل الخدمة خلال آخر 12 شهرًا.",
    "أنت توافق على تعويض wemisc والدفاع عنها وإبرائها من أي مطالبات أو خسائر أو أضرار أو مسؤوليات أو نفقات (بما في ذلك أتعاب المحاماة) تنشأ عن:",
    "• مخالفتك لهذه الشروط.",
    "• استخدامك للخدمة بطريقة غير قانونية.",
    "• أي محتوى تقوم بإرساله أو رفعه إلى الخدمة.",
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
