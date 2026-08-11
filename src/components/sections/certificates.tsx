"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/ui/reveal";
import { certificates } from "@/data/certificates";
import { Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  return (
    <section id="certificates" className="py-24 px-4 bg-card/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 100}>
              <Card className="h-full overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group hover:-translate-y-[5px]">
                {cert.url && (
                  <button
                    type="button"
                    className="relative block w-full aspect-video overflow-hidden bg-secondary/30 cursor-zoom-in"
                    onClick={() => setSelectedCertificate(cert.url!)}
                    aria-label={`View ${cert.name}`}
                  >
                    <Image
                      src={cert.url}
                      alt={cert.name}
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </button>
                )}
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors group-hover:rotate-6 group-hover:scale-105">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  {cert.url && (
                    <div className="transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 hover:bg-primary/10 hover:border-primary/50 transition-all"
                        onClick={() => setSelectedCertificate(cert.url!)}
                      >
                        View Certificate
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {certificates.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground">Certificates coming soon!</p>
          </div>
        )}
      </div>

      {/* Certificate Image Full Screen */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent
          className="max-w-[100vw] w-[100vw] h-[100vh] p-0 overflow-hidden bg-black/95 border-none rounded-none"
          onClose={() => setSelectedCertificate(null)}
        >
          <DialogHeader className="absolute top-4 left-4 z-10">
            <DialogTitle className="text-white">Certificate</DialogTitle>
          </DialogHeader>
          <button
            onClick={() => setSelectedCertificate(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          <div className="w-full h-full flex items-center justify-center p-4">
            {selectedCertificate && (
              <Image
                src={selectedCertificate}
                alt="Certificate"
                fill
                className="object-contain"
                sizes="100vw"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
