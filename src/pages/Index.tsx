import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-vintage-beige">
      {/* Header */}
      <header className="bg-vintage-brown text-white py-4 px-6">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Car" size={32} />
            <h1 className="text-2xl font-oswald font-bold">РЕТРО ВЫСТАВКА</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="hover:text-vintage-wheat transition-colors"
            >
              О выставке
            </a>
            <a
              href="#gallery"
              className="hover:text-vintage-wheat transition-colors"
            >
              Галерея
            </a>
            <a
              href="#organizers"
              className="hover:text-vintage-wheat transition-colors"
            >
              Организаторы
            </a>
            <a
              href="#contacts"
              className="hover:text-vintage-wheat transition-colors"
            >
              Контакты
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-vintage-wheat to-vintage-beige">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-oswald font-bold text-vintage-dark mb-6 leading-tight">
              ВЕСЬ ХЛАМ НА ВЫСТАВКУ
            </h1>
            <p className="text-xl md:text-2xl text-vintage-dark mb-8 font-sans">
              Возвращение к истокам: когда район жил своей жизнью, а машины были
              частью истории каждого из нас
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-white font-oswald text-lg px-8 py-3"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-vintage-dark mb-6">
              О выставке
            </h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              Это мероприятие — не просто выставка автомобилей. Это возвращение
              к истокам, когда район жил своей жизнью, а машины были частью
              истории каждого из нас. Вспомните те времена, когда гаражи
              наполнялись ржавчиной, а во дворах грустили «ласточки» и
              «копейки».
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/img/7a5a01e1-6bb9-45e3-b646-9817eabf37e6.jpg"
                alt="Винтажный автомобиль"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-vintage-wheat p-3 rounded-full">
                  <Icon name="Clock" size={24} className="text-vintage-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-oswald font-bold text-vintage-dark mb-2">
                    Ностальгия
                  </h3>
                  <p className="text-gray-700 font-sans">
                    Окунитесь в атмосферу советских дворов и гаражных
                    кооперативов
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-vintage-wheat p-3 rounded-full">
                  <Icon name="Users" size={24} className="text-vintage-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-oswald font-bold text-vintage-dark mb-2">
                    Сообщество
                  </h3>
                  <p className="text-gray-700 font-sans">
                    Встретьтесь с единомышленниками и любителями
                    ретро-автомобилей
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-vintage-wheat p-3 rounded-full">
                  <Icon name="Heart" size={24} className="text-vintage-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-oswald font-bold text-vintage-dark mb-2">
                    История
                  </h3>
                  <p className="text-gray-700 font-sans">
                    Узнайте истории людей и их четырехколесных спутников
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 bg-vintage-beige">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-vintage-dark mb-6">
              Галерея
            </h2>
            <p className="text-lg text-gray-700 font-sans">
              Взгляните на участников наших прошлых выставок
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.poehali.dev/files/beb25fee-4703-407b-9b01-299569d4c768.png"
                alt="Красный спорткар в городе"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-oswald text-vintage-dark">
                  Классические спорткары
                </CardTitle>
                <CardDescription className="font-sans">
                  Элегантные ретро-автомобили
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.poehali.dev/files/57cb7057-7f84-407a-be19-5682982882bf.png"
                alt="Желтый маслкар"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-oswald text-vintage-dark">
                  Маслкары эпохи
                </CardTitle>
                <CardDescription className="font-sans">
                  Мощные американские легенды
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.poehali.dev/files/f5afc128-56a0-4d38-912b-baadfd86fb92.png"
                alt="Черный мустанг"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-oswald text-vintage-dark">
                  Легендарные мустанги
                </CardTitle>
                <CardDescription className="font-sans">
                  Иконы американского автопрома
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizers" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold text-vintage-dark mb-6">
              Организаторы
            </h2>
            <p className="text-lg text-gray-700 font-sans">
              Команда энтузиастов, которая делает это возможным
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="mx-auto mb-4 w-20 h-20 bg-vintage-wheat rounded-full flex items-center justify-center">
                  <Icon
                    name="Building"
                    size={32}
                    className="text-vintage-brown"
                  />
                </div>
                <CardTitle className="text-2xl font-oswald text-vintage-dark">
                  Москва LIVE
                </CardTitle>
                <CardDescription className="text-lg font-sans">
                  Организация мероприятий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-sans mb-4">
                  Мы специализируемся на создании уникальных культурных
                  мероприятий, которые объединяют людей и сохраняют историческую
                  память.
                </p>
                <Badge
                  variant="secondary"
                  className="bg-vintage-wheat text-vintage-brown"
                >
                  Культурные мероприятия
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-6 bg-vintage-brown text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-oswald font-bold mb-6">Контакты</h2>
            <p className="text-lg opacity-90 font-sans">
              Свяжитесь с нами для участия в выставке
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-vintage-wheat p-3 rounded-full">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-vintage-brown"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-oswald font-bold">Адрес</h3>
                  <p className="opacity-90 font-sans">Аэропорт Шереметьево</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-vintage-wheat p-3 rounded-full">
                  <Icon name="Phone" size={24} className="text-vintage-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-oswald font-bold">Телефон</h3>
                  <p className="opacity-90 font-sans">+7 (953) 593-99-66</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-vintage-wheat p-3 rounded-full">
                  <Icon name="Mail" size={24} className="text-vintage-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-oswald font-bold">Email</h3>
                  <p className="opacity-90 font-sans">265-315</p>
                </div>
              </div>
            </div>

            <div className="bg-vintage-wheat/10 p-6 rounded-lg">
              <h3 className="text-xl font-oswald font-bold mb-4">
                Хотите участвовать?
              </h3>
              <p className="opacity-90 font-sans mb-4">
                Если у вас есть ретро-автомобиль и интересная история, мы будем
                рады видеть вас на нашей выставке!
              </p>
              <Button className="bg-vintage-wheat text-vintage-brown hover:bg-vintage-wheat/90 font-oswald">
                Подать заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-vintage-dark text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Icon name="Car" size={24} />
            <span className="text-lg font-oswald">РЕТРО ВЫСТАВКА</span>
          </div>
          <Separator className="my-4 bg-white/20" />
          <p className="text-sm opacity-70 font-sans">
            © 2024 Москва LIVE. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
