import Card from "../common/Card";

export default function StatCard({ icon: Icon, value, title }) {
  return (
    <Card className="p-6 text-center">
      <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
        <Icon size={22} className="text-primary" />
      </div>

      <h3 className="text-3xl font-bold text-primary">{value}</h3>

      <p className="mt-2 text-sm text-slate-500">{title}</p>
    </Card>
  );
}
