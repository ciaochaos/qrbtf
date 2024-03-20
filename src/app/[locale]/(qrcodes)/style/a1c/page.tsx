import QrcodeGeneratorWithProvider from "@/components/QrcodeGeneratorWithProvider";
import {
  QrbtfRendererA1Props,
  qrbtfModuleA1,
} from "@/lib/qrbtf_lib/qrcodes/a1";
import { useA1Params } from "@/lib/qrbtf_lib/qrcodes/a1_config";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("qrcodes.a1");
  const { params, defaultValues } = useA1Params("a1c");

  return (
    <QrcodeGeneratorWithProvider<QrbtfRendererA1Props>
      title={t("title")}
      subtitle={t("subtitle")}
      qrcodeModule={qrbtfModuleA1}
      params={params}
      defaultValues={defaultValues}
    />
  );
}
