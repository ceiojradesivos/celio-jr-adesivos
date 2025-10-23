import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, MessageCircle, Palette, Car, Shirt, Image } from "lucide-react";

export default function Home() {
  const whatsappNumber = "5577981378038";
  const instagramHandle = "celio.jr.adesivos";

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Adesivos Personalizados",
      description: "Criação de adesivos personalizados em vinil de alta qualidade para qualquer aplicação."
    },
    {
      icon: <Car className="w-12 h-12 text-primary" />,
      title: "Envelopamento Automotivo",
      description: "Transforme seu veículo com envelopamento profissional em diversas cores e acabamentos."
    },
    {
      icon: <Shirt className="w-12 h-12 text-primary" />,
      title: "Pinturas em Camisas",
      description: "Personalização de camisetas com estampas exclusivas e de alta durabilidade."
    },
    {
      icon: <Image className="w-12 h-12 text-primary" />,
      title: "Criação de Logo",
      description: "Desenvolvimento de identidade visual profissional para sua marca ou negócio."
    },
    {
      icon: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>,
      title: "Vetorização de Imagens",
      description: "Conversão de imagens em vetores de alta qualidade para impressão em qualquer tamanho."
    }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre os serviços de adesivos.`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Célio Jr Adesivos" className="h-16 w-auto" />
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
                Contato
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <Button onClick={handleInstagramClick} variant="outline" size="icon" className="rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button onClick={handleWhatsAppClick} className="gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme suas ideias em{" "}
                <span className="text-primary">realidade visual</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Especialista em adesivos personalizados, envelopamento automotivo e comunicação visual. 
                Qualidade profissional e atendimento personalizado em Vitória da Conquista - BA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleWhatsAppClick} size="lg" className="gap-2 text-lg">
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
                </Button>
                <Button onClick={handleInstagramClick} variant="outline" size="lg" className="gap-2 text-lg">
                  <Instagram className="w-5 h-5" />
                  Ver Portfólio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/hero.jpg" 
                alt="Adesivos coloridos de alta qualidade" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas em comunicação visual e personalização, 
              com materiais de primeira qualidade e acabamento profissional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center">{service.title}</h3>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/services.jpg" 
                alt="Processo de criação de adesivos" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Qualidade e Precisão em Cada Detalhe
              </h2>
              <p className="text-lg text-muted-foreground">
                Trabalhamos exclusivamente com vinil adesivo de alta qualidade, garantindo durabilidade 
                e acabamento profissional em todos os projetos. Cada peça é produzida com atenção aos 
                mínimos detalhes, desde a criação até a aplicação final.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Materiais premium: vinil adesivo de alta qualidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Acabamentos especiais: holográfico, refletivo e fosco</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Atendimento personalizado e consultoria especializada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre Célio Jr Adesivos
            </h2>
            <p className="text-lg text-muted-foreground">
              Com anos de experiência no mercado de comunicação visual, o Célio Jr Adesivos se destaca 
              pela qualidade dos materiais utilizados e pela excelência no atendimento. Especializado em 
              adesivos personalizados e envelopamento automotivo, oferecemos soluções criativas e 
              profissionais para clientes em Vitória da Conquista e região.
            </p>
            <p className="text-lg text-muted-foreground">
              Cada projeto é tratado com dedicação e atenção aos detalhes, garantindo que o resultado 
              final supere as expectativas. Do design à aplicação, trabalhamos com as melhores técnicas 
              e materiais do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para dar vida ao seu projeto?
            </h2>
            <p className="text-lg opacity-90">
              Entre em contato agora mesmo e solicite um orçamento sem compromisso. 
              Estamos prontos para transformar suas ideias em realidade!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleWhatsAppClick} 
                size="lg" 
                variant="secondary"
                className="gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                (77) 98137-8038
              </Button>
              <Button 
                onClick={handleInstagramClick} 
                size="lg" 
                variant="outline"
                className="gap-2 text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Instagram className="w-5 h-5" />
                @celio.jr.adesivos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Célio Jr Adesivos" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground text-center">
              © {new Date().getFullYear()} Célio Jr Adesivos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-3">
              <Button onClick={handleInstagramClick} variant="ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button onClick={handleWhatsAppClick} variant="ghost" size="icon">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

