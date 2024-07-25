// pages/colors.tsx

const colors = [
    { name: 'Primary', className: 'bg-primary' },
    { name: 'Secondary', className: 'bg-secondary' },
    { name: 'Accent', className: 'bg-accent' },
    { name: 'White', className: 'bg-white' },
    { name: 'Light Grey', className: 'bg-light-grey' },
    { name: 'Medium Grey', className: 'bg-medium-grey' },
    { name: 'Dark Grey', className: 'bg-dark-grey' },
    { name: 'Text Primary', className: 'text-primary' },
    { name: 'Text Secondary', className: 'text-secondary' },
    { name: 'Text Grey', className: 'text-grey' },
    { name: 'Background Primary', className: 'bg-background-primary' },
    { name: 'Background Secondary', className: 'bg-background-secondary' },
    { name: 'Border', className: 'border' },
  ];
  
  export default function Colors() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Color Palette</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="flex items-center">
              <div className={`${color.className} w-16 h-16 rounded-lg mr-4`} />
              <span className="text-lg">{color.name} - <code>{color.className}</code></span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  