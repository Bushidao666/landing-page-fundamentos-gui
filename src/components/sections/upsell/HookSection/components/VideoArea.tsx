"use client";

import { motion } from "framer-motion";
import { Play, Rocket } from "lucide-react";
import { useState } from "react";

export function VideoArea() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="space-y-6">
      {/* Sub-headline da Oportunidade - EXATAMENTE como na copy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <p className="text-xl sm:text-2xl font-medium text-gray-800 italic">
          O que você acabou de aprender é a chave de ignição. 
          <span className="block mt-2 text-2xl sm:text-3xl font-bold text-gray-900 not-italic">
            Agora, eu quero te oferecer o carro de corrida inteiro.
          </span>
        </p>
      </motion.div>

      {/* Área do Vídeo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-900"
      >
        {!isPlaying ? (
          <>
            {/* Thumbnail do vídeo - Placeholder com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
              {/* Podemos adicionar uma imagem do Guilherme aqui depois */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Rocket className="w-20 h-20 text-yellow-400 mx-auto" />
                  <p className="text-white text-2xl font-bold">Guilherme Mornatti</p>
                  <p className="text-gray-300">Assista este vídeo importante</p>
                </div>
              </div>
            </div>

            {/* Botão de Play */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-white rounded-full p-6 shadow-2xl">
                  <Play className="w-12 h-12 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </div>
            </motion.button>

            {/* Badge "IMPORTANTE" */}
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm uppercase"
            >
              Assista Agora
            </motion.div>
          </>
        ) : (
          /* Iframe do vídeo - Você pode substituir pelo ID real do vídeo depois */
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID_AQUI?autoplay=1"
            title="Vídeo de apresentação do Sistema de Tração"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </motion.div>

      {/* Texto do vídeo - EXATAMENTE como na copy */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center text-gray-600 italic max-w-3xl mx-auto"
      >
        <p className="text-sm">
          "E aí! Massa que você tá aqui. Se você pegou o Fundamentos, é porque você tá sério sobre ter resultado. 
          Mas deixa eu te fazer uma pergunta... Você quer só 'melhorar' seu Google Ads ou quer construir um 
          <span className="font-bold text-gray-900"> sistema de tração</span> que faz seu e-commerce inteiro 
          decolar de forma previsível? O que eu vou te mostrar nesta página é esse sistema. Fica comigo, isso é importante."
        </p>
      </motion.div>
    </div>
  );
}