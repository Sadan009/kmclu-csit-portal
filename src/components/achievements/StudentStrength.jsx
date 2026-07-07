import Card from "../common/Card";

export default function StudentStrength({ students }) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {students.map((year) => (
        <Card key={year.year} className="p-6">
          <h3 className="text-xl font-bold text-primary mb-5">{year.year}</h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>BCA</span>

                <span>{year.bca}</span>
              </div>

              <div className="h-2 rounded bg-slate-100">
                <div
                  style={{
                    width: `${year.bca}%`,
                  }}
                  className="h-2 rounded bg-primary"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>MCA</span>

                <span>{year.mca}</span>
              </div>

              <div className="h-2 rounded bg-slate-100">
                <div
                  style={{
                    width: `${year.mca * 2}%`,
                  }}
                  className="h-2 rounded bg-accent"
                />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
