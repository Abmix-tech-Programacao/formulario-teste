import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Check,
  ClipboardList,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cadastro | Só precisamos de alguns detalhes" },
      {
        name: "description",
        content:
          "Preencha as informações abaixo para continuar. Formulário de cadastro simples e moderno.",
      },
      { property: "og:title", content: "Cadastro | Só precisamos de alguns detalhes" },
      {
        property: "og:description",
        content:
          "Preencha as informações abaixo para continuar. Formulário de cadastro simples e moderno.",
      },
      { name: "twitter:title", content: "Cadastro | Só precisamos de alguns detalhes" },
      {
        name: "twitter:description",
        content:
          "Preencha as informações abaixo para continuar. Formulário de cadastro simples e moderno.",
      },
    ],
  }),
  component: Index,
});

type FormData = {
  fullName: string;
  age: string;
  phone: string;
  email: string;
  city: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  fullName: "",
  age: "",
  phone: "",
  email: "",
  city: "",
  notes: "",
};

const REQUIRED_FIELDS: (keyof FormData)[] = ["fullName", "age", "phone", "email", "city"];

function Index() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    fullName: false,
    age: false,
    phone: false,
    email: false,
    city: false,
    notes: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = "Informe o nome completo";
    }

    if (!data.age.trim()) {
      newErrors.age = "Informe a idade";
    } else if (!/^\d+$/.test(data.age) || Number(data.age) <= 0 || Number(data.age) > 120) {
      newErrors.age = "Informe uma idade válida";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Informe o telefone";
    } else if (data.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Informe um telefone válido";
    }

    if (!data.email.trim()) {
      newErrors.email = "Informe o e-mail";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Informe um e-mail válido";
    }

    if (!data.city.trim()) {
      newErrors.city = "Informe a cidade";
    }

    return newErrors;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    if (isSubmitted) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTouched({
      fullName: true,
      age: true,
      phone: true,
      email: true,
      city: true,
      notes: true,
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setShowSuccess(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setTouched({
      fullName: false,
      age: false,
      phone: false,
      email: false,
      city: false,
      notes: false,
    });
    setIsSubmitted(false);
    setShowSuccess(false);
  };

  const isFieldValid = (field: keyof FormData) => {
    return touched[field] && !errors[field] && formData[field].trim().length > 0;
  };

  const isFieldInvalid = (field: keyof FormData) => {
    return touched[field] && !!errors[field];
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-form-bg px-4 py-4 sm:py-6 font-sans">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-form-accent/10 blur-3xl" />
        <div className="absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-form-bg-glow/40 blur-3xl" />
        <div className="absolute left-1/3 top-12 h-3 w-3 rounded-full bg-form-accent/30" />
        <div className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-form-accent/20" />
        <div className="absolute bottom-24 left-16 h-2 w-2 rounded-full bg-white/20" />
        <div className="absolute right-12 top-20 h-32 w-32 rounded-full border border-white/5" />
        <div className="absolute bottom-1/3 left-1/4 h-48 w-48 rounded-full border border-form-accent/10" />
        <svg
          className="absolute -right-8 top-1/2 h-64 w-64 -translate-y-1/2 text-form-accent/5"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M40,100 Q70,40 100,100 T160,100"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="rounded-2xl sm:rounded-[1.75rem] bg-form-card p-5 sm:p-7 shadow-2xl shadow-black/10">
          {showSuccess ? (
            <SuccessMessage onReset={handleReset} />
          ) : (
            <>
              {/* Header */}
              <div className="mb-5 text-center">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-form-accent/10">
                  <ClipboardList className="h-5 w-5 text-form-accent" strokeWidth={2} />
                </div>
                <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Só precisamos de{" "}
                  <span className="text-form-accent">alguns detalhes</span>
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  Preencha as informações abaixo para continuar.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                <FormField
                  id="fullName"
                  label="Nome completo"
                  icon={User}
                  placeholder="Ex: Guilherme Silva"
                  value={formData.fullName}
                  onChange={(value) => handleChange("fullName", value)}
                  onBlur={() => handleBlur("fullName")}
                  error={errors.fullName}
                  isValid={isFieldValid("fullName")}
                  isInvalid={isFieldInvalid("fullName")}
                />

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <FormField
                    id="age"
                    label="Idade"
                    icon={Calendar}
                    placeholder="Ex: 28"
                    value={formData.age}
                    onChange={(value) => handleChange("age", value)}
                    onBlur={() => handleBlur("age")}
                    error={errors.age}
                    isValid={isFieldValid("age")}
                    isInvalid={isFieldInvalid("age")}
                    inputMode="numeric"
                  />

                  <FormField
                    id="phone"
                    label="Telefone / WhatsApp"
                    icon={Phone}
                    placeholder="Ex: (11) 99999-9999"
                    value={formData.phone}
                    onChange={(value) => handleChange("phone", value)}
                    onBlur={() => handleBlur("phone")}
                    error={errors.phone}
                    isValid={isFieldValid("phone")}
                    isInvalid={isFieldInvalid("phone")}
                    inputMode="tel"
                  />
                </div>

                <FormField
                  id="email"
                  label="E-mail"
                  icon={Mail}
                  placeholder="Ex: seuemail@exemplo.com"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleChange("email", value)}
                  onBlur={() => handleBlur("email")}
                  error={errors.email}
                  isValid={isFieldValid("email")}
                  isInvalid={isFieldInvalid("email")}
                  inputMode="email"
                />

                <FormField
                  id="city"
                  label="Cidade"
                  icon={MapPin}
                  placeholder="Ex: São Paulo - SP"
                  value={formData.city}
                  onChange={(value) => handleChange("city", value)}
                  onBlur={() => handleBlur("city")}
                  error={errors.city}
                  isValid={isFieldValid("city")}
                  isInvalid={isFieldInvalid("city")}
                />

                <div className="space-y-1">
                  <Label htmlFor="notes" className="text-xs sm:text-sm font-medium text-foreground">
                    Observações <span className="text-muted-foreground">(opcional)</span>
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                      onBlur={() => handleBlur("notes")}
                      placeholder="Conte algo que considere importante..."
                      maxLength={300}
                      className="h-[72px] min-h-[72px] resize-none rounded-lg border-input bg-transparent pl-9.5 pr-3 py-2 text-sm transition-all duration-200 focus-visible:border-form-accent focus-visible:ring-form-accent"
                    />
                  </div>
                  <div className="flex justify-end pt-0.5">
                    <span
                      className={`text-xs font-medium transition-colors ${
                        formData.notes.length >= 300 ? "text-form-accent" : "text-muted-foreground"
                      }`}
                    >
                      {formData.notes.length}/300
                    </span>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="mt-1.5 h-10 sm:h-11 w-full rounded-lg sm:rounded-xl bg-primary text-sm sm:text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 active:translate-y-0"
                >
                  Enviar cadastro
                  <span className="ml-1">→</span>
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  icon: React.ElementType;
  placeholder: string;
  type?: string | undefined;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string | undefined;
  isValid: boolean;
  isInvalid: boolean;
  inputMode?: "text" | "numeric" | "tel" | "email" | undefined;
}

function FormField({
  id,
  label,
  icon: Icon,
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  isValid,
  isInvalid,
  inputMode = "text",
}: FormFieldProps) {
  return (
    <div className="space-y-1">
      <Label htmlFor={id} className="text-xs sm:text-sm font-medium text-foreground">
        {label}
      </Label>
      <div className="relative">
        <Icon
          className={`absolute left-3 top-1/2 h-4 w-4 sm:h-4.5 sm:w-4.5 -translate-y-1/2 transition-colors duration-200 ${
            isInvalid ? "text-destructive" : "text-muted-foreground"
          }`}
        />
        <Input
          id={id}
          type={type}
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? `${id}-error` : undefined}
          className={`h-10 rounded-lg border bg-transparent pl-9.5 pr-9.5 text-sm transition-all duration-200 focus-visible:ring-1 ${
            isInvalid
              ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive"
              : "border-input focus-visible:border-form-accent focus-visible:ring-form-accent"
          }`}
        />
        {isValid && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-form-accent/10 p-0.5">
            <Check className="h-3.5 w-3.5 text-form-accent" strokeWidth={3} />
          </div>
        )}
      </div>
      {isInvalid && error && (
        <p id={`${id}-error`} className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-form-accent/10">
        <Check className="h-10 w-10 text-form-accent" strokeWidth={2.5} />
      </div>
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
        Cadastro enviado com sucesso!
      </h2>
      <p className="mt-3 max-w-sm text-sm text-muted-foreground">
        Obrigado pelas informações. Em breve entraremos em contato.
      </p>
      <Button
        type="button"
        variant="outline"
        onClick={onReset}
        className="mt-8 h-11 rounded-xl border-form-accent/30 px-6 text-sm font-semibold text-form-accent transition-all duration-200 hover:bg-form-accent-subtle hover:text-form-accent"
      >
        Preencher novamente
      </Button>
    </div>
  );
}
